import { useState } from "react";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorMessage = "";

  if (!email.includes(".")) {
    errorMessage = "Email in wrong format!";
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit!");
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 border-2 p-4 items-center w-100'>
      <h1>Sign Up</h1>
      <p> Currently signing up:</p>
      <p className="FONTmedium text-lg text-red-500">{errorMessage}</p>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      
      <button type="submit">Sign Up</button>
      <p>
        Already have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Sign in
        </a>
      </p>
    </form>
  );
}
