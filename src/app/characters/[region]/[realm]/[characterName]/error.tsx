"use client";

const customError = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen">
        <div>
          <h1>No matches found. Please check filters</h1>
        </div>
      </div>
    </>
  );
};

export default customError;
