import { motion } from 'framer-motion'
import logo from '../../assets/cool.png'
import { useState } from 'react'



const PreFilter: React.FC = () => {

  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Buscando actividades en: ', inputValue)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

    return (
        <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 2 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6 }}
		>
			<div className='flex flex-col items-center justify-center h-screen m-8'>
            <img src={logo} alt='Cool-LOGO' className='flex w-[17vw] ml-36 mb-8 ' />
              
            <form className='w-full max-w-md p-6 ml-20' onSubmit={handleSubmit}>

            <div className='text-2xl mb-6'>
            </div>

            <div className='mb-4'>
            <input
							type='text'
							id='email'
							name='email'
							className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500 placeholder-opacity-75 font-poppy'
							value={inputValue}
							onChange={handleChange}
							required
							placeholder='where are you going?'
						/>
            </div>

            
					{/* <div className='mb-4'>
						<input
							type='password'
							id='password'
							name='password'
							className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500 placeholder-opacity-75 font-poppy'
							value={formData.password}
							onChange={handleChange}
							required
							placeholder='Password'
						/>
					</div> */}

          <div className='flex flex-col items-center'>
								<button
									type='submit'
									className='bg-orange-700 w-[10vw] hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2'
								>
									Go discover!
								</button>
							</div>
              
            </form>
              
          </div>
        </motion.div>
    )
  }
  
  export default PreFilter;