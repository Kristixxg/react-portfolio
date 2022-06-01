import React from "react";
import './portfolio.css';
import Recipe from '../../assets/recipeSearch.png';
import BookSpot from '../../assets/bookSpot.png';
import Quiz from '../../assets/quiz.png';
import NoteTaker from '../../assets/notetaker.png';
import dayplanner from '../../assets/dayplanner.png';
import textEditor from '../../assets/texteditor.png';


const data = [
    {
        id:1,
        image: Recipe,
        title: 'Recipe Search Tool',
        github: 'https://github.com/Kristixxg/recipes-search-tool',
        demo:'https://snehitak20.github.io/lets-stay-in'
    },
    {
        id:2,
        image: BookSpot,
        title: 'Book Search Engine',
        github: 'https://github.com/Kristixxg/book-spot-search-tool',
        demo:'https://aqueous-plateau-74718.herokuapp.com/'
    },
    {
        id:3,
        image: Quiz,
        title: 'Code Quiz',
        github: 'https://github.com/Kristixxg/code-quiz',
        demo:'https://kristixxg.github.io/code-quiz/'
    },
    {
        id:4,
        image: NoteTaker,
        title: 'Note Taker',
        github: 'https://github.com/Kristixxg/note-taker',
        demo:'https://notetakerkxx.herokuapp.com/'
    },
    {
        id:5,
        image: dayplanner,
        title: 'Day Planner',
        github: 'https://github.com/Kristixxg/day-planner',
        demo:'https://kristixxg.github.io/day-planner/'
    },
    {
        id:6,
        image: textEditor,
        title: 'JATE Text Editor',
        github: 'https://github.com/Kristixxg/pwa-text-editor',
        demo:'https://fierce-sands-51003.herokuapp.com/'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">

                {data.map(({id, image, title, github, demo})=> {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="#">Github</a>
                                <a href={demo} className="btn btn-primary" target="#">View Page</a>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section>
    )
}

export default Portfolio;