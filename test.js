


const decor = (text) => (c) => {
	return class {
		log() {
			const x = new c()
			x.log()
			console.log(text)
		}
	}
}






@decor('THIS IS THE DECORATOR')
class DecorateMe {
	log() {
		console.log('DECORATE ME')
	}
}



const test = new DecorateMe()

test.log()




class DecorateMe2 {
	log() {
		console.log('DECORATE ME')
	}
}

DecorateMe2 = decor('SameTHing')(DecorateMe2)

const test2 = new DecorateMe2()
test2.log()

 
 
 
 
 
 
 