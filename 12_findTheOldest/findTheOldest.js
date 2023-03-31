const findTheOldest = function(people) {
    const ordered = people.sort(function(a,b){
        if(a.yearOfDeath === undefined)
        {
            const today = new Date();
            const firstTotal1 = today.getFullYear() - a.yearOfBirth;
            const secondTotal1 = b.yearOfDeath - b.yearOfBirth;
            if(firstTotal1 > secondTotal1)
            {
                return -1;
            }
            else
            {
                return 1;
            }
        }
        else if(b.yearOfDeath === undefined)
        {
            const todayNew = new Date();
            const secondTotal2 = todayNew.getFullYear - b.yearOfBirth;
            const firstTotal2 = a.yearOfDeath-a.yearOfBirth;
            if(firstTotal2 > secondTotal2)
            {
                return -1;
            }
            else
            {
                return 1;
            }
        }
        else
        {
            const firstTotal3 = a.yearOfDeath-a.yearOfBirth;
            const secondTotal3 = b.yearOfDeath - b.yearOfBirth;
            if(firstTotal3 > secondTotal3)
            {
                return -1;
            }
            else
            {
                return 1;
            }
        }
    });

    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
