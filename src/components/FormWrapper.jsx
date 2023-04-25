const FormWrapper = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-1/2 bg-base-200">
      {children}
    </div>
  );
};

export default FormWrapper;
