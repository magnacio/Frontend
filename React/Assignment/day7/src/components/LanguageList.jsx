const LanguageList = () => {
  const languages = ["JavaScript", "Python", "Java", "C++", "Go"];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Programming Languages</h1>
      <ul className="space-y-2">
        {languages.map((lang, index) => (
          <li key={index} className="p-3 bg-white shadow rounded">
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
