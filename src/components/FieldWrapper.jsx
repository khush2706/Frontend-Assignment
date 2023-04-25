const FieldWrapper = ({children}) => {
    return (
        <div className="flex flex-col gap-y-3 items-center justify-center bg-slate-50 w-full p-2 rounded border-2 border-blue-100 mb-5">
            {children}
        </div>
    );
}
 
export default FieldWrapper;