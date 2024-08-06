function basicErrorHandling() {
    try {
        throw new Error('Error Message will be throw into catch block...')
    } catch (error) {
        console.error('The error is..', error.message)
    } finally{
        console.log('The finally block is going to run anyway in every condition...')
    }
}

basicErrorHandling()