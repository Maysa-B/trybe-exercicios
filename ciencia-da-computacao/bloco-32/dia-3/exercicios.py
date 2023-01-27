import re

def fizzbuzz(n):
    result = []

    for i in range(1, n + 1):
        if i % 5 == 0 and i % 3 == 0:
            result.append('FizzBuzz')
        elif i % 5 == 0:
            result.append('Buzz')
        elif i % 3 == 0:
            result.append('Fizz')
        else:
            result.append(i)
    
    return result


print(fizzbuzz(15))

regex = '^[a-z]+[_]?[-]?[a-z0-9]+[@]\w+[.]\w{2,3}$'

def check_email(email):
    if (re.search(regex, email)):
        print('Valid')
    else:
        print('Invalid')


print('maybsalvalaio@gmail.com')
check_email('maybsalvalaio@gmail.com')
print('12teste@lalaa.com')
check_email('12teste@lalaa.com')
print('test.test@oiwer.com')
check_email('test.test@oiwer.com')
print('ueh_ewjhr@sjh.ais')
check_email('ueh_ewjhr@sjh.ais')
print('ueh-ewjhr@sjh.ais')
check_email('ueh-ewjhr@sjh.ais')
print('uehwjhr@sjh.aidfs')
check_email('uehwjhr@sjh.aidfs')