/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'

import { useCurrentUser } from "../../hooks/useCurrentUser";

import { toast } from "react-hot-toast";

import { categories } from "../categories/categories";

import { selectDestinations } from "../../features/destinationSlice";
import {
  createActivity,
  createActivityFormData,
} from "../../features/createActivitySlice";

import DropZone from "../inputs/DropZone";
import ActivityForm from "../forms/ActivityForm";
import CategoryInput from "../inputs/CategoryInput";
import Map from "../Map";
import Button from "../buttons/Button";
import Container from "../containers/Container";

export interface Destination {
	_id: string
	title: string
	description: string
	categories: string[]
	location: string
}

const AddAdventure = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

	const { currentUserId } = useCurrentUser()
	const destinationsList = useSelector(selectDestinations)

	const [destinations, setDestinations] = useState<Destination[]>([])
	const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

  const [formData, setFormData] = useState<createActivityFormData>({
    title: "",
    description: "",
    location: "",
    galleryImage: [],
    videoLink: "",
    category: [],
    individualPrice: "",
    groupPrice: "",
    starterPack: "",
    startTime: "",
    endTime: "",
    idDestination: "",
  });

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

    if (isChecked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: [...formData.category, value],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: formData.category.filter((val) => val !== value),
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

	const handleDestinationChange = (selectedOption: any) => {
		setSelectedDestination(selectedOption)
		setFormData((prevFormData) => ({
			...prevFormData,
			idDestination: selectedOption?._id,
		}))
	}

	console.log(formData.idDestination)

	const handleFilesSelected = (files: File[]) => {
		const updatedGallery = [...formData.galleryImage, ...files]
		setFormData((prevFormData) => ({
			...prevFormData,
			galleryImage: updatedGallery,
		}))
	}

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      idDestination,
      title,
      description,
      individualPrice,
      groupPrice,
      galleryImage,
      category,
      location,
      videoLink,
      starterPack,
      startTime,
      endTime,
    } = formData;

    if (
      !idDestination ||
      !title ||
      !description ||
      !individualPrice ||
      !groupPrice ||
      !galleryImage ||
      !category ||
      !location ||
      !videoLink ||
      !starterPack ||
      !startTime ||
      !endTime
    ) {
      toast.error("Por favor, complete todos los campos");
      return;
    }

    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("individualPrice", individualPrice);
    data.append("groupPrice", groupPrice);
    data.append("location", location);
    data.append("videoLink", videoLink);
    data.append("starterPack", starterPack);
    data.append("startTime", startTime);
    data.append("endTime", endTime);
    data.append("idDestination", idDestination);

    for (let i = 0; i < formData.galleryImage.length; i++) {
      data.append("galleryImage", formData.galleryImage[i]);
    }

    formData.category.forEach((category) => {
      data.append("category", category);
    });

    try {
      await dispatch(createActivity(data, currentUserId));
      setFormData({
        title: "",
        description: "",
        individualPrice: "",
        groupPrice: "",
        galleryImage: [],
        category: [],
        location: "",
        videoLink: "",
        starterPack: "",
        startTime: "",
        endTime: "",
        idDestination: "",
      });
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    }
  };

	useEffect(() => {
		setDestinations(destinationsList)
	}, [destinationsList])

	return (
		<Container>
			<div className='flex flex-col md:items-center xl:items-start pt-14'>
				<h2 className='text-[32px] font-medium'>Add adventure</h2>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center justify-center w-full transition'
				>
					<div className='mx-auto py-5 xl:py-8 w-full xl:w-4/5 2xl:w-5/6'>
						<DropZone onFilesSelected={handleFilesSelected} />
					</div>

					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Select destination
					</h3>
					<div className='mx-auto py-5 w-full md:4/5 xl:w-4/5 2xl:w-5/6'>
						<Select
							options={destinations}
							value={selectedDestination}
							onChange={handleDestinationChange}
							placeholder='Select destination'
							isClearable
							formatOptionLabel={(option: any) => (
								<div className='flex flex-row items-center gap-3'>
									<div>
										<span className='text-neutral-500'>{option.title}</span>
									</div>
								</div>
							)}
							classNames={{
								control: () => 'p-3 border-2',
								input: () => 'text-lg',
								option: () => 'text-lg',
							}}
							styles={{
								control: (provided: any) => ({
									...provided,
									width: '100%',
									height: '20px',
									minHeight: '60px',
									borderRadius: '10px',
								}),
								singleValue: (provided: any) => ({
									...provided,
									display: 'flex',
									alignItems: 'center',
								}),
							}}
							theme={(theme) => ({
								...theme,
								borderRadius: 6,
								colors: {
									...theme.colors,
									primary: 'white',
									primary25: '#ce452a60',
								},
							})}
						/>
					</div>

          <h3 className="text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6">
            Select destination
          </h3>
          <div className="mx-auto py-5 xl:w-4/5 2xl:w-5/6">
            <Select
              isMulti
              options={renderOptions()}
              value={selectedDestination} 
              onChange={handleDestinationChange}
			  formatOptionLabel={formatOptionLabel}
              placeholder=""
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  height: "20px",
                  minHeight: "60px",
                  borderRadius: "10px",
                }),
                singleValue: (provided: any) => ({
                  ...provided,
                  display: "flex",
                  alignItems: "center",
                }),
              }}
            />
          </div>

          {/* FORM */}
          <h3 className="text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6">
            Activity Info
          </h3>

          <div className="w-full xl:w-4/5 2xl:w-5/6 flex items-center justify-center md:gap-10 py-5 xl:py-8">
            <ActivityForm handleChange={handleChange} form={formData} />
          </div>

          {/* CATEGORIES */}
          <h3 className="text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6">
            Category adventure
          </h3>

					{/* MAP */}
					<div className='mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						<h3 className='text-2xl font-semibold'>Adventure location</h3>
						<div className='flex flex-col items-center py-10'>
							<Map />
						</div>
					</div>

          {/* MAP */}
          <div className="mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6">
            <h3 className="text-2xl font-semibold">Adventure location</h3>
            <div className="flex md:hidden flex-col items-center py-10">
              <Map w={300} h={250} />
            </div>
            <div className="hidden md:flex lg:hidden flex-col items-center py-10">
              <Map w={450} h={350} />
            </div>
            <div className="hidden lg:flex xl:hidden flex-col items-center py-10">
              <Map w={650} h={400} />
            </div>
            <div className="hidden xl:flex 2xl:hidden flex-col items-center py-10">
              <Map w={800} h={450} />
            </div>
            <div className="hidden 2xl:flex flex-col items-center py-10">
              <Map />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col lg:flex-row items-center justify-evenly gap-4 lg:gap-20 mx-auto py-10 w-full">
            <div className="w-full lg:w-2/5 xl:w-2/6">
              <Button
                label="Back"
                card
                outline
                onClick={() => navigate("/admindash")}
              />
            </div>
            <div className="w-full lg:w-2/5 xl:w-2/6">
              <Button label="Create" card type="submit" />
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddAdventure;
