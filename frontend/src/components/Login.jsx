import React, {useState} from 'react'
import { Link } from 'react-router-dom';
function Login() {
  const [name, setname] = useState('');
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    const loginCredentials = {email, Password};
    console.log(JSON.stringify(loginCredentials));
  }
  return (
    <div>
        <dialog id="my_modal_3" className='modal'>
            <div className='modal-box dark:bg-slate-900 dark:text-white'>
              <form method='dialog'>
                    <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'> X </button>

              </form>
                <form  onSubmit={handleSubmit}>
              
                <h3 className='font-bold text-lg'>Login</h3>
                <div className='flex flex-col gap-y-1 my-3'>
                    <div>Email</div>
                    <label className="input input-bordered flex items-center gap-2 mb-5 dark:bg-slate-900 dark:text-white dark:border border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow dark:bg-slate-900 dark:text-white" placeholder="Email" required  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </label>
                </div>

                <div className='flex flex-col gap-y-1 my-3'>
                    <div>Password</div>
                    <label className="input input-bordered flex items-center gap-2 mb-5 dark:bg-slate-900 dark:text-white dark:border border-white" value={Password} onChange={(e)=>{setPassword(e.target.value)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
              <input type="text" className="grow dark:bg-slate-900 dark:text-white" placeholder="Password" required/>
            </label>
                </div>

                <div className='flex justify-between items-center'>
                <button className="bg-pink-600 text-white py-2 px-3 mt-1 rounded-md hover:bg-pink-700 duration-300 cursor-pointer" type="submit">Login</button>
                <span>Don't have account? <Link to="/signup" className='text-pink-600 underline self-center'>Sign Up</Link></span>
                </div>
                </form>
            </div>

        </dialog>
    </div>
  )
}

export default Login