import Card from "@/components/custom/Card";
import Heading from "@/components/custom/Heading";

const Recommended = () => {
    return (
        <section>
            <div className="bg-back mt-6 mb-2 py-4 px-3 rounded-md">
                <Heading first='Recommended' next='For You'></Heading>  
            </div>
            <div className="grid grid-cols-5 gap-2">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </section>
    );
};

export default Recommended;