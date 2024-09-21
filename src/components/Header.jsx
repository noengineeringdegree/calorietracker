import React from 'react'

export default function Header(){
    return(
        <div>
            <p>It's Time To Measure</p>
            <h1>YOUR <span className="text-yellow">ENERGY</span> OUTPUT</h1>
            <p>A calorie is the amount of energy needed to raise <span>1g of H20 by 1 degree Celsius</span>. The average 12fl. 
            oz water bottle is ~ 350g. Calories as we know them today are truly '<span>kilo</span>calories', so 1 kCal ~ 1000g of water heated by 
            1 degree C. Burning 1 kilo-calorie heats up <span>more than 2</span> waterbottles! 
            This calculator takes your activities and converts them to
            water bottles left too long in a <span>brand-spankin'-new</span> 2016 Hyundai Sonata!
            </p>
        </div>
    )
}