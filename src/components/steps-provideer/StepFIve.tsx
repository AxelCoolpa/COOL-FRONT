import { useEffect, useState, ChangeEvent } from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import { StepProps } from './InitialSteps'; 

interface Campo {
    nombre: string;
    apellido: string;
}

const StepFive: React.FC<StepProps> = ({previous ,skip, handleStepClick}) => {
    const [campos, setCampos] = useState<Campo[]>([{ nombre: '', apellido: '' }]);

    const agregarCampos = () => {
        setCampos([...campos, { nombre: '', apellido: '' }]);
    };

    const eliminarCampos = (index: number) => {
        if (campos.length > 1) {
            const nuevosCampos = [...campos];
            nuevosCampos.splice(index, 1);
            setCampos(nuevosCampos);
        }
    };

    const handleInputChange = (
        index: number,
        campo: keyof Campo,
        value: string
    ) => {
        const nuevosCampos = [...campos];
        nuevosCampos[index][campo] = value;
        setCampos(nuevosCampos);
    };

   
      const handlePrevious = () => {
         previous && previous()
         handleStepClick && handleStepClick(2)
      }
      const handleSkip = () => {
         skip && skip()
        handleStepClick && handleStepClick(1)
      }

    return (
        <>
            <nav className="flex justify-end items-center mb-8 ">
                <span className="text-gray-600 ">
                    Having trouble?
                    <a href="#" className="text-orange-600 no-underline font-bold pl-2">Get help</a>
                </span>
            </nav>
          <div className=" p-2 mt-16 w-1/2">
          <h1 className='font-bold text-lg '>Board of Agents</h1>
                <span className="block mb-4">Details about your company agents, include all of your directors name here</span>
            <div className='w-1/2'>
                {campos.map((campo, index) => (
                    <div className="flex flex-row gap-2" key={index}>
                        <input
                            type="text"
                            placeholder="First name"
                            value={campo.nombre}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(index, 'nombre', e.target.value)
                            }
                            className="border border-gray-400 rounded p-2 mb-4 w-[150px]"
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            value={campo.apellido}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(index, 'apellido', e.target.value)
                            }
                            className="border border-gray-400 rounded p-2 ml-4 mb-4 w-[150px]"
                        />
                        {index > 0 && (
                            <button
                            onClick={() => eliminarCampos(index)}
                            className="p-2 flex items-start text-grey-500"
                          >
                            <IoCloseOutline size={25} />
                          </button>
                        )}
                    </div>
                ))}
                 <button  onClick={agregarCampos}  className="p-2 text-OrangeCooL" >
                    + Add member
                </button>
            </div>
            <div className='flex justify-between mr-8 mt-32 w-[350px]'>
                <button className='bg-white text-black px-6 border rounded-[5px] h-[40px]' onClick={handlePrevious}>Previous</button>
                <div className='ml-4 '>
                <button className='bg-white text-black px-6 border rounded-[5px] h-[40px] mr-2' onClick={handleSkip}>Skip</button>
                <button className='bg-OrangeCooL text-white px-6 border  rounded-[5px] h-[40px]'>Next</button>
                </div>
            </div>
         </div>
        </>
    );

}

export default StepFive