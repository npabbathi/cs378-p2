import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

// fixed my bug with onClick with ChatGPT, I was doing updateOrder(index, false) instead of making a function to call () => updateOrder(index, false)
const MenuItem = ({ title, description, imageName, price, index, orders, updateOrder }) => {
    return (
        <div>
            <div className="row menu_item">
                <div className='col'>
                    <img className='menu_image' src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={`${title}`} />
                </div>
                <div className="col">
                    <h2 className='title'>{title}</h2>
                    <div className="row">
                        <div className='col'>
                            <p>{description}</p>
                        </div>
                        <div className='col'>
                            <p className='price'>{price}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col'>
                        </div>
                        <div className='col'>
                            <button onClick={() => updateOrder(index, false)} className="round minus"> - </button>
                            <p className="amount">{orders[index]}</p>
                            <button onClick={() => updateOrder(index, true)} className="round plus"> + </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
