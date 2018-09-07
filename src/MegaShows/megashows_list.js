import farhanPicture from '../images/farhan.jpg';
import glit from '../images/glit.jpg';
import bhangra from '../images/bhangra.jpg';
import artha from '../images/artha.jpg';
import dakua from '../images/dakua.jpg';
import groovz from '../images/groovz.jpg';

export default [
	{
		id: 1,
		title: 'Star Night Pecfest 2017',
    titleLine: 'Farhan Live',
		date: '',
		location: '',
		coverPhoto: farhanPicture,
		isEvent: false,
		//poster: '/Images/shows/Farhan.jpg',
		shouldSplit: true,
	},
	{
		id: 2,
		title: 'Gliterrati',
    titleLine: 'Fashion Night',
		date: '',
		location: '',
		coverPhoto: glit,
		//poster: '/Images/shows/gl.jpg',
		isEvent: false,
		//eventId: '/events/178',
		shouldSplit: false,
	},
	{
		id: 3,
		title: 'Bhangra Theque',
    titleLine: 'Beat the Punjabi Beats',
		date: '',
		location: '',
		coverPhoto: bhangra,
		//poster: '/Images/shows/bhangraT.jpg',
		isEvent: false,
		//eventId: '/events/122',
		shouldSplit: false,
	},
	{
		id: 4,
		title: 'Artha',
		titleLine: `Headlining 'The Fusion Band Competition'`,
		date: '',
		location: '',
		//poster: '/Images/shows/Artha.jpg',
		coverPhoto: artha,
		shouldSplit: false,
	},
	{
		id: 5,
		title: 'The Dakua Stop',
		titleLine: `Headlining 'Rockathon'`,
		date: '',
		location: '',
		//poster: '/Images/shows/DakuaStop.jpg',
		coverPhoto: dakua,
		shouldSplit: false,
	},
	{
		id: 6,
		title: 'Groovz',
		titleLine: 'Bollywood Dance',
		date: '',
		location: '',
		coverPhoto: groovz,
		shouldSplit: false,
		isEvent: false,
		//eventId: '/events/119',
	}
]