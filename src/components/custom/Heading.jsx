
const Heading = ({ first, next }) => {
    return (
        <h2 className="text-xl w-fit uppercase font-semibold bg-gradient-to-r from-high to-prim bg-clip-text text-transparent">
            {first} {next}
        </h2>
    );
};

export default Heading;