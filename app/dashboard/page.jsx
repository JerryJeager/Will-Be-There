let name = "Joseph Ibe" 

export default function dashboard(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
            <h1 className="text-red-500">Dashboard</h1>
            <p>My name is {name}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, omnis quia. Quo, non inventore eveniet voluptatibus sapiente ea consequatur aliquam sequi a facere mollitia quis ipsam perferendis iusto iure dolores.</p>
        </div>
    )
}