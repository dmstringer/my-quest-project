import React, { Fragment } from 'react';

function AboutProject() {
  return (
    <Fragment>
      <div className='container-fluid justify-content-center text-center mt-4'>
        <div className="d-flex flex-column container col-6">
            <div className="row media mb-2">
                <div className="media-body text-left">
                    <h3 className="my-2 text-center">About My Warhammer Quest Project</h3>
                    <p className='h5'>So, I'm a huge tabletop gaming nerd.</p> 
                    <p className='h5'>Board games, role-playing games (like Dungeons and Dragons), card games, miniatures games...if you can gather around a table and play it, I probably have.</p>
                    <p className='h5'>Many years ago my friends and I played this tabletop miniatures game called <a className='font-weight-bold' href='https://en.wikipedia.org/wiki/Warhammer_Quest'>Warhammer Quest</a>.</p>
                </div>
                <img className="ml-3 myimage" src="questbox2.jpg" alt="Quest Box" style={ {width: '300px', height: '211px' }} />
            </div>
            <div className="row media mb-2">
                <img className="ml-3 myimage" src="minis.jpg" alt="Quest Miniatures" style={ {width: '300px', height: '212px' }} />
                <div className="media-body text-left">
                    <p className='h5 mt-3 ml-3'>It is a fantasy adventure board game simulating a Dungeons-and-Dragons style dungeon crawl, but without a dungeon master controlling the monsters.</p>
                    <p className='h5 ml-3'>The game presented a set of rules for how the monsters behaved and attacked the players. </p>
                    <p className='h5 ml-3'>With many different mechanics to generate and control the monsters, all you needed were some other players to sit down with you and play.</p>
                </div>
            </div>
            <div className="row media mb-2">
                <div className="media-body text-left">
                    <p className='h5 mt-3'>The one mechanic that I found to be the most tedious was the random monster tables layed out in the rule book for all the higher level monsters. (monsters past level 1)</p>
                    <p className='h5'>Each new encounter became this tiresome process of rolling on a table for the monsters... </p>
                    <p className='h5'>Then looking elsewhere in the book for all the special rules that monster had...</p>
                    <p className='h5'>Then rolling on another chart to see what treasures those monsters were carrying... </p>
                    <img className="myimage mx-auto d-block" src="rage2.jpg" alt="Rage" style={ {width: '133px', height: '75px' }} />
                </div>
                <img className="ml-3 myimage" src="monsterchart3.jpg" alt="Monster Chart" style={ {width: '300px', height: '227px' }} />
            </div>
            <div className="row media mb-2 mt-2">
                <img className="ml-3 myimage" src="helper2.jpg" alt="My Excel Helper" style={ {width: '350px', height: '200px' }} />
                <div className="media-body text-left">
                    <p className='h5 mt-3 ml-3'>I fealt there had to be a way to speed up this process.</p>
                    <p className='h5 ml-3'>At the time I was good with Excel and I was learning VBA to automate some processes for my job, so I decided to build a monster generator in an Excel spreadsheet. </p>
                    <p className='h5 ml-3'>I brought in all the monster tables and rules into the excel file as different Excel sheets, essentially my 'database'.</p>
                    <p className='h5 ml-3'>I used Visual Basic to create the logic of generating the monsters and treasures.</p>
                </div>
            </div>
            <div className="row media mb-2">
                <div className="media-body text-left">
                    <p className='h5 mt-3'>It was clunky, but it worked.</p>
                    <p className='h5'>My friends and I used my little Excel pet project many times over the years, with Warhammer Quest spread out on a kitchen table, and a laptop running my little app sitting next to it. </p>
                    <p className='h5'>Fast forward about fifteen years, and I now find myself with the skills to take my little pet project and turn it into a proper full-stack web application.</p>
                    <p className='h5 mt-3'>So here we are...</p>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutProject;