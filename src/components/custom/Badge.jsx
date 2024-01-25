import pt from 'prop-types'

const Badge = ({ children }) => {
    return (
        <p className="bg-red-500 w-5 h-5 text-center text-sm rounded-full text-white font-semibold absolute top-0 right-0">{children}</p>
    );
};

export default Badge;
Badge.propTypes = {
    children: pt.node,
}