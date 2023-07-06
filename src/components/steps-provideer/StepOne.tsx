import { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import Button from '../buttons/Button';
import { StepProps } from './InitialSteps';
interface Country {
  code: string;
  dialCode: string;
  label: string;
  flag: string;
}

 

const StepOne: React.FC<StepProps>= ({next ,handleSetForm ,formData}) => {
  const [email , setEmail] = useState('')
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const countriesData = data.map((country: any) =>{ 
        const suffixes = country.idd?.suffixes && country.idd?.suffixes.length ?  country.idd?.suffixes[0] : ''
          return {
          code: country.cca2,
          dialCode: country.idd.root + suffixes,
          label: country.name.common,
          flag: country.flags.svg,
        }});
        countriesData.sort((a: any, b: any) => a.label.localeCompare(b.label));
        setCountries(countriesData);
        console.log(countriesData)
      })
      .catch(error => {
        console.log('Error al obtener los datos de los países:', error);
      });
  }, []);

  const handleCountryChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
    
    setPhoneNumber(selectedOption.dialCode + "-")
    
  };

  const handlePhone = (e:React.ChangeEvent<HTMLInputElement> ) =>{
   const {value} = e.target

   if(/^[-+]?(\d+|\d+-\d+)$/.test(value)){
    setPhoneNumber(value)
    
     formData.companyPhone = phoneNumber
     handleSetForm(formData)
    console.log(formData)
   }
   else{
    setPhoneNumber(selectedCountry?.dialCode + "-" + "")
   }
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  
    const updatedFormData = { ...formData, companyEmail: value };
    handleSetForm(updatedFormData);
  };

const handleNext = () =>{
   if(formData.companyPhone.length && formData.companyEmail.length){
     next && next()
   }
   else{
      alert("Missing fields to complete")
   }
}



  const Option = (props: any) => {
    return (
      <components.Option {...props}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={props.data.flag} alt="Bandera" style={{ width: '24px', marginRight: '8px' }} />
        <span className='pl-2 pr-2'>{`${props.data?.label}`}</span>
        <span>{`${props.data?.dialCode}`}</span>
        </div>
      </components.Option>
    );
  };

  const formatOptionLabel = (option: any) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={option.flag} alt="Bandera" style={{ width: '25px', marginRight: '2px' }} />

    </div>
  );
  return (
    <div className="flex flex-col h-screen ">
        <nav className="flex justify-end items-center mb-16 ">
        <span className="text-gray-600 ">
          Don't have an account?
          <a href="#" className="text-orange-600 no-underline font-bold pl-2">Sign up</a>
        </span>
      </nav>
      <header className="flex flex-col items-center justify-center mt-8 mb-8">
        <h1 className='font-bold text-lg ' >Launch your company now</h1>
        <span>Get the process started in less than 10 minutes. <br />Let us handle the rest</span>
      </header>

        <div className="max-w-sm mx-auto flex-col justify-start">
      <form>
          <div className="mb-4">
            <input id="email" name="email" placeholder='Email' value={email} className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500  placeholder-gray-500 placeholder-opacity-75 font-poppy' onChange={handleEmail}/>
          </div>
          <div className="mb-4">

            <div className="relative">
              <Select
                options={countries}
                value={selectedCountry}
                onChange={handleCountryChange}
                components={{ Option }}
                formatOptionLabel={formatOptionLabel}
                placeholder=""
                styles={{
                  control: (provided: any) => ({
                    ...provided,
                    position: 'absolute',
                    top: '1px',
                    left: '1px',
                    width: '80px',
                    height: '20px',
                    minHeight: '40px',
                    boxShadow: 'none',
                    border: 'none'
                  }),
                  singleValue: (provided: any) => ({
                    ...provided,
                    display: 'flex',
                    alignItems: 'center',
                  }),
                }}
              />
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhone}
                className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 pl-20 focus:ring-orange-500   font-poppy'
                placeholder="Phone number"
              />
            </div>
          </div>
      </form>
          <div className="flex w-48 relative bottom-5 h-16" >
          <Button  label="Start my business" small={true} onClick={handleNext}/>
          </div>
        </div>
    </div>
  )
}

export default StepOne