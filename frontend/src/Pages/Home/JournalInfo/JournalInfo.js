import React from 'react';

const JournalInfo = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div>
                <article className="prose">
                    <h1>Garlic bread with cheese: What the science tells us</h1>
                    <p>
                        For years parents have espoused the health benefits of eating garlic bread with cheese to their
                        children, with the food earning such an iconic status in our culture that kids will often dress
                        up as warm, cheesy loaf for Halloween.
                    </p>
                    <p>
                        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                        springing up around the country.
                    </p>
                
                </article>
            </div>
        </div>
    );
};

export default JournalInfo;