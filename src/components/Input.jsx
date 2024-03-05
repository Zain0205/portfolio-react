function Input({ id, title, textArea, ...props }) {
  return (
    <div className="w-full mb-2 flex flex-col">
      <label className="text-primary text-xl font-semibold" htmlFor={id}>
        {title}
      </label>
      {textArea ? (
        <textarea rows={5} placeholder={props.placeholder} className="w-full mt-3 p-2 rounded-md bg-slate-300 placeholder:text-md placeholder:text-slate-500 outline-none" id={id}></textarea>
      ) : (
        <input className="w-full px-2 bg-slate-300 mt-3 py-3 rounded-md placeholder:text-slate-500 outline-none placeholder:text-md" id={id} {...props} />
      )}
    </div>
  );
}

export default Input;
