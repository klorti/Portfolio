import "./footer.css";

interface StyleInputProps {
  name: string;
  placeholder?: string;
}

function StyledInput({ name, placeholder }: StyleInputProps) {
  return (
    <>
      <div className="flex">
        <input
          className="border-box w-auto h-11 bg-white rounded-l-sm my-3 placeholder:text-gray-500 placeholder:pl-5 placeholder:text-sm"
          name={name}
          placeholder={placeholder ?? ""} // Nullish coalescing
        ></input>
        <button className=" bg-blue-600 h-11 w-11 rounded-r-sm my-3">                
          <svg className="m-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="4"
            stroke="white"
            height="15px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="py-14 px-44 bg-[#0a142f] font-sans text-gray-400 leading-7">
      <nav className="flex justify-between py-10 ">
        <ul>
          <li>
            <h4 className="mt-5 mb-3 text-[#e6dfdf]">Product</h4>
          </li>
          <li>
            <a href="https://www.google.com">Employee database</a>
          </li>
          <li>
            <a href="https://www.google.com">Payroll</a>
          </li>
          <li>
            <a href="https://www.google.com">Absences</a>
          </li>
          <li>
            <a href="https://www.google.com">Time tracking</a>
          </li>
          <li>
            <a href="https://www.google.com">Shift planner</a>
          </li>
          <li>
            <a href="https://www.google.com">Recruiting</a>
          </li>
        </ul>
        <ul>
          <li>
            <h4 className="mt-5 mb-3 text-[#e6dfdf]">Information</h4>
          </li>
          <li>
            <a href="https://www.google.com">FAQ</a>
          </li>
          <li>
            <a href="https://www.google.com">Blog</a>
          </li>
          <li>
            <a href="https://www.google.com">Support</a>
          </li>
        </ul>
        <ul>
          <li>
            <h4 className="mt-5 mb-3 text-[#e6dfdf]">Company</h4>
          </li>
          <li>
            <a href="https://www.google.com">About us</a>
          </li>
          <li>
            <a href="https://www.google.com">Careers</a>
          </li>
          <li>
            <a href="https://www.google.com">Contact us</a>
          </li>
          <li>
            <a href="https://www.google.com">Lift Media</a>
          </li>
        </ul>
        <div className="px-10 py-5 bg-[#434e646c] w-78 h-60">
          <ul>
            <li>
              <h4 className=" text-[#e6dfdf]">Subscribe</h4>
            </li>
            <li>
              <StyledInput name="subscribe" placeholder="Email address"/>
            </li>
            <li>
              <p className="text-xs text-gray-400 leading-5">
                Hello, we are Lift Media. Our goal is to translate the positive
                effects from revolutionaizing how companies engage with their
                clients & their team.
              </p>
            </li>
          </ul>
        </div>
      </nav>

      <hr className="border-zinc-500" />

      <div className="flex justify-between items-center mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="123"
          height="40"
          viewBox="0 0 123 40"
          id="Logo"
        >
          <g id="logotype">
            <path
              d="M115.737 11.8284L107.152 0H123L115.737 11.8284Z"
              fill="#e6dfdf"
            />
            <path
              d="M96.7638 0.00153177H102.446L113.673 15.4694L98.6121 39.9985L82.9109 39.9992L78.2611 33.5911L74.3266 40L53.926 39.9992L49.2762 33.5911L45.3425 39.9985L11.6236 39.9992L0 23.9822L14.7243 0.00153177H27.5979L13.1866 23.4722L17.2121 29.0195L39.2109 29.0187L47.216 15.9795L43.5891 10.9813H38.8735L31.2042 23.4706L32.9546 25.8824H19.3985L18.0184 23.9807L32.7411 0.00153177H49.1767L53.4287 5.8598L57.025 0.00306355L84.6146 0.000765887L77.8725 10.9813L63.1574 10.9821L60.4026 15.4686L60.4034 15.4694L55.4889 23.4722L59.5144 29.0195H68.195L70.6033 25.0981H60.9848L60.0859 23.6345L65.9291 14.1184H90.2168L84.4738 23.4714L88.4993 29.0187H92.4805L100.486 15.9795L96.8586 10.9813H82.5727L89.3148 0H96.7638V0.00153177Z"
              fill="#e6dfdf"
            />
          </g>
        </svg>

        <nav className="flex gap-8 text-[#e6dfdf] text-sm">
          <a href="https://www.google.com">
            <h5>Terms</h5>
          </a>
          <a href="https://www.google.com">
            <h5>Privacy</h5>
          </a>
          <a href="https://www.google.com">
            <h5>Cookies</h5>
          </a>
        </nav>

        <div className="flex gap-2">
          <a href="https://linkedin.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="#e6dfdf"
            >
              <path
                d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>

          <a href="https://facebook.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="#e6dfdf"
            >
              <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
            </svg>
          </a>
          <a href="https://twitter.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="#e6dfdf"
            >
              <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>

  );
}