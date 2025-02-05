import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div>
            <div className="row menu_item">
                <div className='col'>
                    <img className='menu_image' src={`./images/${imageName}`} alt={`${title}`} />
                </div>
                <div className="col">
                    <h2 className='title'>{title}</h2>
                    <p>{description}</p>
                    <div className="row">
                        <div className='col'>
                            <p>{price}</p>
                        </div>
                        <div className='col'>
                            <button className="round"> Add </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
