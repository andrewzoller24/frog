const counters = document.querySelectorAll('counter')

counters.ForEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = counter.getAttribute('data-target')
    }

    updateCounter()
})