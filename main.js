import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const PAGE_SIZE = 10
let currentPage = 1

const dummyData = [
	{
		id: 1,
		eventName: 'Cloud Innovation Summit',
		date: '2024-10-15',
		speaker: 'Jane Doe',
		status: 'completed'
	},
	{
		id: 2,
		eventName: 'Blockchain Revolution Conference',
		date: '2024-11-05',
		speaker: 'Dr. Peter Smith',
		status: 'in-progress'
	},
	{
		id: 3,
		eventName: 'AI for Future Development',
		date: '2024-09-21',
		speaker: 'Alice Johnson',
		status: 'completed'
	},
	{
		id: 4,
		eventName: 'Cybersecurity Global Forum',
		date: '2024-12-12',
		speaker: 'Robert King',
		status: 'in-progress'
	},
	{
		id: 5,
		eventName: 'React Native Conference',
		date: '2024-08-18',
		speaker: 'John Martinez',
		status: 'completed'
	},
	{
		id: 6,
		eventName: 'Web3 Developer Meetup',
		date: '2024-11-19',
		speaker: 'Dr. Linda Brown',
		status: 'in-progress'
	},
	{
		id: 7,
		eventName: 'AR/VR Expo',
		date: '2024-07-23',
		speaker: 'Samuel Green',
		status: 'completed'
	},
	{
		id: 8,
		eventName: 'Big Data World',
		date: '2024-09-02',
		speaker: 'Catherine Lee',
		status: 'completed'
	},
	{
		id: 9,
		eventName: 'FinTech Disruption Forum',
		date: '2024-10-29',
		speaker: 'Emily Wright',
		status: 'in-progress'
	},
	{
		id: 10,
		eventName: 'Quantum Computing Symposium',
		date: '2024-12-01',
		speaker: 'Daniel Evans',
		status: 'in-progress'
	},
	{
		id: 11,
		eventName: 'Smart City Conference',
		date: '2024-06-10',
		speaker: 'Megan Scott',
		status: 'completed'
	},
	{
		id: 12,
		eventName: 'Edge Computing Workshop',
		date: '2024-11-08',
		speaker: 'David Parker',
		status: 'in-progress'
	},
	{
		id: 13,
		eventName: '5G Innovation Expo',
		date: '2024-07-15',
		speaker: 'Christopher Young',
		status: 'completed'
	},
	{
		id: 14,
		eventName: 'DevOps Summit',
		date: '2024-10-07',
		speaker: 'Patricia White',
		status: 'completed'
	},
	{
		id: 15,
		eventName: 'SaaS Global Forum',
		date: '2024-12-18',
		speaker: 'Michael Thompson',
		status: 'in-progress'
	},
	{
		id: 16,
		eventName: 'IoT World Congress',
		date: '2024-09-30',
		speaker: 'Rebecca Davis',
		status: 'completed'
	},
	{
		id: 17,
		eventName: 'Digital Transformation Summit',
		date: '2024-10-19',
		speaker: 'Stephen Hill',
		status: 'in-progress'
	},
	{
		id: 18,
		eventName: 'Mobile App Innovation Summit',
		date: '2024-11-23',
		speaker: 'Dr. Elizabeth Torres',
		status: 'in-progress'
	},
	{
		id: 19,
		eventName: 'Healthcare Tech Expo',
		date: '2024-08-03',
		speaker: 'Anthony Bennett',
		status: 'completed'
	},
	{
		id: 20,
		eventName: 'Green Tech Symposium',
		date: '2024-10-02',
		speaker: 'Natalie Peterson',
		status: 'completed'
	},
	{
		id: 21,
		eventName: 'EdTech Conference',
		date: '2024-06-28',
		speaker: 'William Moore',
		status: 'completed'
	},
	{
		id: 22,
		eventName: 'E-Commerce Innovation Summit',
		date: '2024-09-15',
		speaker: 'Sophia Walker',
		status: 'completed'
	},
	{
		id: 23,
		eventName: 'Clean Energy Conference',
		date: '2024-07-09',
		speaker: 'Olivia Turner',
		status: 'completed'
	},
	{
		id: 24,
		eventName: 'Machine Learning Summit',
		date: '2024-11-12',
		speaker: 'Alexander Hughes',
		status: 'in-progress'
	},
	{
		id: 25,
		eventName: 'Startups Global Summit',
		date: '2024-12-05',
		speaker: 'Benjamin Murphy',
		status: 'in-progress'
	},
	{
		id: 26,
		eventName: 'Autonomous Vehicles Expo',
		date: '2024-08-27',
		speaker: 'Rachel Cooper',
		status: 'completed'
	},
	{
		id: 27,
		eventName: 'Tech Leadership Conference',
		date: '2024-09-18',
		speaker: 'Charlotte Phillips',
		status: 'completed'
	},
	{
		id: 28,
		eventName: 'Cloud Security Forum',
		date: '2024-11-20',
		speaker: 'Joshua Mitchell',
		status: 'in-progress'
	},
	{
		id: 29,
		eventName: 'Robotics Innovation Showcase',
		date: '2024-07-01',
		speaker: 'Ethan Rogers',
		status: 'completed'
	},
	{
		id: 30,
		eventName: 'Sustainable Tech Summit',
		date: '2024-09-05',
		speaker: 'Mia Cox',
		status: 'completed'
	}
]

// Setup the sidebar
const navFullBtn = document.querySelector('.item.nav-full')
const navCollapseBtn = document.querySelector('.item.nav-collapse')
const sidebar = document.querySelector('.sidebar')

navFullBtn.addEventListener('click', () => {
	sidebar.setAttribute('data-collapsed', 'false')
})

navCollapseBtn.addEventListener('click', () => {
	sidebar.setAttribute('data-collapsed', 'true')
})

// Setup the dark mode
const darkToggleBtn = document.querySelector('.item.dark-toggle')

darkToggleBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark')
	darkToggleBtn.setAttribute('data-toggled', document.body.classList.contains('dark'))
})

// Setup mobile menu
const dropdownBtn = document.querySelector('.dropdown')
const navFullContainer = document.querySelector('.sidebar .full')

dropdownBtn.addEventListener('click', () => {
	if (navFullContainer.getAttribute('data-open') === 'true') {
		navFullContainer.setAttribute('data-open', 'false')
	} else {
		navFullContainer.setAttribute('data-open', 'true')
	}
})

// Setup event bar chart using chart.js
const ctx = document.getElementById('event-bar-chart')

const data = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	datasets: [
		{
			label: 'Events',
			data: [690, 950, 760, 420, 1000, 590, 860, 350, 830, 660, 910, 600],
			backgroundColor: '#8576FF',
			borderColor: '#8576FF',
			borderWidth: 0
		}
	]
}

const config = {
	type: 'bar',
	data: data,
	options: {
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			y: {
				beginAtZero: true,
				border: {
					dash: [6, 6]
				},
				grid: {
					color: 'rgba(0, 0, 0, 0.1)'
				},
				ticks: {
					stepSize: 200
				}
			},
			x: {
				border: {
					dash: [6, 6]
				},
				grid: {
					color: 'rgba(0, 0, 0, 0.1)'
				}
			}
		},
		responsive: true,
		title: {
			display: false
		}
	}
}

const eventBarChart = new Chart(ctx, config)

// Setup event slides
const slidesContainer = document.querySelector('.slides')
const prevBtn = document.querySelector('.prev-slide-btn')
const nextBtn = document.querySelector('.next-slide-btn')

prevBtn.addEventListener('click', () => {
	if (slidesContainer.getAttribute('data-active') === '1') {
		slidesContainer.setAttribute('data-active', '3')
	} else {
		slidesContainer.setAttribute('data-active', parseInt(slidesContainer.getAttribute('data-active')) - 1)
	}
})

nextBtn.addEventListener('click', () => {
	if (slidesContainer.getAttribute('data-active') === '3') {
		slidesContainer.setAttribute('data-active', '1')
	} else {
		slidesContainer.setAttribute('data-active', parseInt(slidesContainer.getAttribute('data-active')) + 1)
	}
})

setInterval(() => {
	if (slidesContainer.getAttribute('data-active') === '3') {
		slidesContainer.setAttribute('data-active', '1')
	} else {
		slidesContainer.setAttribute('data-active', parseInt(slidesContainer.getAttribute('data-active')) + 1)
	}
}, 10000)

// Setup event table pagination
const paginationContainer = document.querySelector('.pagination-container')
const prevPageBtn = paginationContainer.querySelector('.icon.prev')
const nextPageBtn = paginationContainer.querySelector('.icon.next')
const pagesContainer = paginationContainer.querySelector('.pages')

prevPageBtn.addEventListener('click', () => {
	if (currentPage === 1) {
		return
	}

	currentPage--

	generateDesktopTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : statusSelect.value)

	generateMobileTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : statusSelect.value)
})

nextPageBtn.addEventListener('click', () => {
	const totalPages = Math.ceil(dummyData.length / PAGE_SIZE)

	if (currentPage === totalPages) {
		return
	}

	currentPage++

	generateDesktopTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : statusSelect.value)

	generateMobileTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : statusSelect.value)
})

// Setup desktop and mobile event table
const searchInput = document.getElementById('search-input')
const statusSelect = document.getElementById('status-select')
const eventDesktopTableBody = document.querySelector('.table-main.desktop tbody')
const eventMobileTableBody = document.querySelector('.table-main.mobile tbody')

searchInput.addEventListener('input', event => {
	generateDesktopTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : event.target.value)

	generateMobileTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : event.target.value)
})

statusSelect.addEventListener('change', event => {
	generateDesktopTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : event.target.value)

	generateMobileTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : event.target.value)
})

generateDesktopTableContent('', 'all')

generateMobileTableContent('', 'all')

function generateDesktopTableContent(searchFilter, statusFilter) {
	let filteredDummyData = [...dummyData]

	if (searchFilter) {
		filteredDummyData = filteredDummyData.filter(event => event.eventName.toLowerCase().includes(searchFilter.toLowerCase()))
	}

	if (statusFilter !== 'all') {
		filteredDummyData = filteredDummyData.filter(event => event.status === statusFilter)
	}

	eventDesktopTableBody.innerHTML = ''

	const totalPages = Math.ceil(filteredDummyData.length / PAGE_SIZE)

	if (currentPage > totalPages) {
		currentPage = totalPages
	}

	filteredDummyData = filteredDummyData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

	filteredDummyData.forEach(event => {
		const row = createDesktopTableRow(event)
		eventDesktopTableBody.appendChild(row)
	})

	addDialogEventListnerToRows()
	generatePagesBtns(totalPages)
}

function generateMobileTableContent(searchFilter, statusFilter) {
	let filteredDummyData = [...dummyData]

	if (searchFilter) {
		filteredDummyData = filteredDummyData.filter(event => event.eventName.toLowerCase().includes(searchFilter.toLowerCase()))
	}

	if (statusFilter !== 'all') {
		filteredDummyData = filteredDummyData.filter(event => event.status === statusFilter)
	}

	eventMobileTableBody.innerHTML = ''

	const totalPages = Math.ceil(filteredDummyData.length / PAGE_SIZE)

	if (currentPage > totalPages) {
		currentPage = totalPages
	}

	filteredDummyData = filteredDummyData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

	filteredDummyData.forEach(event => {
		const row = createMobileTableRow(event)
		eventMobileTableBody.appendChild(row)
	})

	addDialogEventListnerToRows()
	addMobileRowToggleEventListner()
	generatePagesBtns(totalPages)
}

function createDesktopTableRow(event) {
	const row = document.createElement('tr')
	row.setAttribute('data-id', event.id)

	const eventNameCell = document.createElement('td')
	eventNameCell.textContent = event.eventName
	row.appendChild(eventNameCell)

	const dateCell = document.createElement('td')
	dateCell.textContent = event.date
	row.appendChild(dateCell)

	const speakerCell = document.createElement('td')
	speakerCell.textContent = event.speaker
	row.appendChild(speakerCell)

	const statusCell = document.createElement('td')
	statusCell.classList.add(event?.status === 'completed' ? 'completed' : 'in-progress')
	const iconContainer = document.createElement('div')
	iconContainer.classList.add('icon-container')
	const iconDiv = document.createElement('div')
	iconDiv.classList.add('icon')
	const textElement = document.createElement('p')
	textElement.textContent = event?.status === 'completed' ? 'Completed' : 'In Progress'
	iconContainer.appendChild(iconDiv)
	iconContainer.appendChild(textElement)
	statusCell.appendChild(iconContainer)
	row.appendChild(statusCell)

	return row
}

function createMobileTableRow(event) {
	const row = document.createElement('tr')
	row.setAttribute('data-id', event.id)
	row.setAttribute('data-collapsed', 'false')

	const rowData = document.createElement('td')

	const mainContainerDiv = document.createElement('div')
	mainContainerDiv.classList.add('main-container')

	const dataContainerDiv = document.createElement('div')
	dataContainerDiv.classList.add('data-container')
	const nameContainerDiv = document.createElement('div')
	nameContainerDiv.classList.add('name-container')
	const lightImage = document.createElement('img')
	lightImage.src = '/images/table/light/chevron-right.svg'
	lightImage.alt = 'arrow right'
	lightImage.classList.add('arrow-action', 'light-icon')
	const darkImage = document.createElement('img')
	darkImage.src = '/images/table/dark/chevron-right.svg'
	darkImage.alt = 'arrow right'
	darkImage.classList.add('arrow-action', 'dark-icon')
	const nameP = document.createElement('p')
	nameP.textContent = event.eventName
	nameContainerDiv.appendChild(lightImage)
	nameContainerDiv.appendChild(darkImage)
	nameContainerDiv.appendChild(nameP)
	dataContainerDiv.appendChild(nameContainerDiv)
	const iconContainer = document.createElement('div')
	iconContainer.classList.add('icon-container', event?.status === 'completed' ? 'completed' : 'in-progress')
	const iconP = document.createElement('p')
	iconP.textContent = event?.status === 'completed' ? 'Completed' : 'In Progress'
	iconContainer.appendChild(iconP)
	dataContainerDiv.appendChild(iconContainer)
	mainContainerDiv.appendChild(dataContainerDiv)

	const moreInfoDiv = document.createElement('div')
	moreInfoDiv.classList.add('more-info')
	const moreInfoP1 = document.createElement('p')
	moreInfoP1.textContent = event.speaker
	const moreInfoP2 = document.createElement('p')
	moreInfoP2.textContent = event.date
	moreInfoDiv.appendChild(moreInfoP1)
	moreInfoDiv.appendChild(moreInfoP2)
	mainContainerDiv.appendChild(moreInfoDiv)

	rowData.appendChild(mainContainerDiv)
	row.appendChild(rowData)

	return row
}

function addDialogEventListnerToRows() {
	const rows = document.querySelectorAll('.table-main tbody tr')

	rows.forEach(row => {
		row.addEventListener('click', () => {
			const id = row.getAttribute('data-id')
			const event = dummyData.find(event => event.id === parseInt(id))

			const eventModal = document.querySelector('.event-modal')
			const title = eventModal.querySelector('.title')
			const date = eventModal.querySelector('.date')
			const speakers = eventModal.querySelector('.speakers')
			const status = eventModal.querySelector('.action.mark')

			title.textContent = event.eventName
			date.textContent = event.date
			speakers.textContent = `1 Guest Speaker: ${event.speaker}`
			status.textContent = event.status === 'completed' ? 'Mark as In Progress' : 'Mark as Completed'

			eventModal.setAttribute('data-open', 'true')
		})
	})
}

function addMobileRowToggleEventListner() {
	const rows = document.querySelectorAll('.table-main.mobile tbody tr')

	rows.forEach(row => {
		const arrowActionBtn = row.querySelector('.arrow-action')

		arrowActionBtn.addEventListener('click', event => {
			event.stopPropagation()

			if (row.getAttribute('data-collapsed') === 'true') {
				row.setAttribute('data-collapsed', 'false')
			} else {
				row.setAttribute('data-collapsed', 'true')
			}
		})
	})
}

function generatePagesBtns(totalPages) {
	pagesContainer.innerHTML = ''

	for (let i = 1; i <= totalPages; i++) {
		const pageBtn = document.createElement('button')
		pageBtn.textContent = i
		pageBtn.classList.add('page')

		if (i === currentPage) {
			pageBtn.classList.add('active')
		}

		pageBtn.addEventListener('click', () => {
			currentPage = i

			generateDesktopTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : statusSelect.value)

			generateMobileTableContent(searchInput.value, statusSelect.value === 'Status' ? 'all' : statusSelect.value)
		})

		pagesContainer.appendChild(pageBtn)
	}
}

// Close event modal
const eventModal = document.querySelector('.event-modal')
const eventModalContainer = eventModal.querySelector('.event-modal-container')
const closeEventModalBtn = eventModal.querySelector('.close-icon')
const title = eventModal.querySelector('.title')
const date = eventModal.querySelector('.date')
const speakers = eventModal.querySelector('.speakers')
const status = eventModal.querySelector('.action.mark')

closeEventModalBtn.addEventListener('click', () => {
	title.textContent = 'Event Name'
	date.textContent = 'Event Date'
	speakers.textContent = '3 Guest Speakers: Speaker name A, Speaker name B, Speaker name C.'
	status.textContent = 'Mark as Completed'

	eventModal.setAttribute('data-open', 'false')
})

eventModalContainer.addEventListener('click', event => {
	event.stopPropagation()
})

eventModal.addEventListener('click', () => {
	title.textContent = 'Event Name'
	date.textContent = 'Event Date'
	speakers.textContent = '3 Guest Speakers: Speaker name A, Speaker name B, Speaker name C.'
	status.textContent = 'Mark as Completed'

	eventModal.setAttribute('data-open', 'false')
})
