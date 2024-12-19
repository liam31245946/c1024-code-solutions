import { Link } from 'react-router-dom';
export function NotFound() {
  return (
    <div className="flex">
      <div className="flex-1 py-12 text-center">
        <h3>The Page you are looking for does not exist</h3>
        <Link to="/" className="text-gray-700 cursor-pointer">
          Return to the Catalog
        </Link>
      </div>
    </div>
  );
}
