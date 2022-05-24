#include <stdio.h>

//create main function
int main()
{
    //print hello world
    printf("Hello World!\n");
    //reverse integer number
    int number = 12345;
    int reverse = 0;
    while (number != 0)
    {
        reverse = reverse * 10;
        reverse = reverse + number % 10;
        number = number / 10;
    }
    
    //return 0
    return 0;
}