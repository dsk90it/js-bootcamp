    let gradeCalc = (score, total = 100) => {
        let percent = Math.round((score / total) * 100)
        let grade

        if(typeof score !== 'number' || typeof total !== 'number'){
            throw Error('Please enter a number')
        }

        if(score > total){
            return false
        } else if(percent >= 90){
            grade = 'A'
        } else if(percent >= 80 && percent <= 89){
            grade = 'B'
        } else if(percent >= 70 && percent <= 79){
            grade = 'C'
        } else if(percent >= 60 && percent <= 69){
            grade = 'D'
        } else{
            grade = 'F'
        }

        return console.log(`You got ${grade} grade (${percent}%)!`)
    }

    try{
        gradeCalc(70)
    } catch (e){
        console.log(e.message);
    }

    