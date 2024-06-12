export default function Animation() {
  return (
    <>
      <div className="w-48 overflow-x-hidden group border-b border-black">
        <div className="w-48 select-none cursor-pointer whitespace-nowrap ">
          {" "}
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            width={32}
            height={32}
            className="inline relative right-8 group-hover:translate-x-8 ease-in duration-75"
          >
            <path
              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="inline-block relative right-7 group-hover:translate-x-8 ease-in duration-75 mr-8">
            Seige every sale
          </span>
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            width={32}
            height={32}
            className="inline relative right-7 group-hover:translate-x-8 ease-in duration-75"
          >
            <path
              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="group">
        <span className="decoration-solid underline cursor-pointer">
          Theme Store
        </span>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          width={32}
          height={32}
          className="inline opacity-0 group-hover:opacity-100 ease-in-out duration-300 group-hover:translate-x-2"
        >
          <path
            d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </>
  );
}
