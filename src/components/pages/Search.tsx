import { useSearchParams } from "react-router";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">
                Search list: <span className="text-blue-600">{searchParams.get("title") || "None"}</span>
            </h2>
            <button
                className="bg-blue-600 text-white rounded-xl py-2 px-6 font-semibold hover:bg-blue-700 transition-colors shadow-md"
                onClick={() => setSearchParams({ title: "furniture" })}
            >
                Change
            </button>
        </div>
    );
};

export default Search;
