const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}
function getSumOptions()
{
    let options = [];
    for(let sum=7;sum<=99;sum++)
    {
        let isOption = true;
        for(let i=2, j=sum-2;i<j;i++, j--)
        {
            if(isPrime(i) && isPrime(j))
            {
                isOption = false;
            }
        }
        if(isOption)
            options.push(sum);
    }
    return options;
}
const options = getSumOptions();
function isValidSum(sum)
{
    if(options.indexOf(sum)!=-1)
        return true;
    else
        return false;
}
function getSumPairs(sum)
{
    let pairs = [];
    for(let i=2, j=sum-2;i<j;i++, j--)
    {
        pairs.push({a:i, b: j});
    }
    return pairs;
}
function getProductMultipliers(sum)
{
    multipliers = [];
    for(let i=2;i<sum/i;i++)
    {
        if(sum%i==0 && isValidSum(i+(sum/i)))
            multipliers.push({a:i, b:sum/i});
    }

    return multipliers;
}
function getSumTable(sum)
{
    let pairs = getSumPairs(sum);
    let products = pairs.map((value)=>{return value.a*value.b});
    let productsMultipliers = [];
    for(let product of products)
    {
        productsMultipliers.push(getProductMultipliers(product));
    }
    return productsMultipliers;
}
function getTable()
{
    optionsOptions = [];
    for(sum of options)
    {
        optionsOptions.push(getSumTable(sum));
    }
    return optionsOptions;
}
function isOnlyOneArrayOfLengthOne(arr)
{
    let count = 0;
    for(let innerArr of arr)
    {
        if(innerArr.length==1)
            count++;
    }
    if(count==1)
        return true;
    else
        return false;
}
function getArrayOfLengthOne(arr)
{
    for(let innerArr of arr)
    {
        if(innerArr.length == 1)
            return innerArr;
    }
    return null;
}
function analizeTable()
{
    let table = getTable();
    let newTable = [];
    for(let sumOptions of table)
    {
        if(isOnlyOneArrayOfLengthOne(sumOptions))
            newTable.push(getArrayOfLengthOne(sumOptions));
    }
    return newTable;
}
let table = analizeTable();
let result = null;
if(table.length==1)
    result = table[0][0];
console.log(result);