import recipeFinder from '../assets/media/recipe-finder.png'
import rocksPaperScissor from '../assets/media/RPS-Image.png'
import cssSnippets from '../assets/media/CSS_Snippets.png'
import placeHolder from '../assets/media/PlaceHolder.jpg'


const projects = [
{
    id: 1,
    name: 'Recipe Finder',
    urlDeploy:'https://dmmerchant.github.io/Waste-Not-Recipe-Finder/',
    urlGitHub:'https://github.com/dmmerchant/Waste-Not-Recipe-Finder',
    tags: ['JS','HTML','CSS'],
    description: `Waste-Not Recipe Finder is a website that allows you to search an extensive food and drink database for recipes by ingredient. You can also filter your recipe searches by diet and food allergies. Favorite any recipes you like and they'll save to your user profile.`,
    image: recipeFinder
},
{
    id: 2,
    name: 'Rock Paper Scissors',
    urlDeploy:'https://dmmerchant.github.io/Rock-Paper-Scissor-Game/',
    urlGitHub:'https://github.com/dmmerchant/Rock-Paper-Scissor-Game',
    tags: ['JS','CSS'],
    description: 'A digital flare to an old classic. This Rock Paper Scissors game is built with HTML and Javascript. It allows a user to play the game and keep track of their statistics.',
    image: rocksPaperScissor
},
{
    id: 3,
    name: 'CSS Snippets',
    urlDeploy:'https://dmmerchant.github.io/CSS-Snippet-MiniProj/',
    urlGitHub:'https://github.com/dmmerchant/CSS-Snippet-MiniProj',
    tags: ['HTML','CSS'],
    description: 'This is a simple webpage that holds a collection of CSS snippets. Code is automatically highlighted when selected and can be cut and pasted into an application',
    image: cssSnippets
},
{
    id: 4,
    name: 'Example Project',
    urlDeploy:'',
    urlGitHub:'',
    tags: ['MERN'],
    description: '',
    image: placeHolder
}
]
export {projects};