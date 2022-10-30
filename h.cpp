#include <iostream>
#include <string>
#include <ctime>
#include <queue>
using namespace std;

void guessTheWord()
{
    int category;
    string randomWord;
    char letter;
    string namesOfAnimals[] = {"elephant", "ishimwe", "ighor"};
    string namesOfTeams[] = {"gasogi", "bayern", "manchester"};
    string namesOfDistricts[] = {"gasabo", "nyabihu", "nyarugenge"};
    string namesOfBooks[] = {"maths", "geography", "english"};
    string namesOfFilms[] = {"dumbledoe", "mathius", "civilwar"};
    int existenceOfChar = 0;
    int chances = 3;

    cout << "Enter the category among the ones below: " << endl;
    cout << "1. names of animals" << endl
         << "2. names of teams" << endl
         << "3. names of districts" << endl
         << "4. names of books" << endl
         << "5. names of films" << endl;
    cin >> category;

    switch (category)
    {
    case 1:
        srand(time(NULL));
        randomWord = namesOfAnimals[rand() % (sizeof(namesOfAnimals) / sizeof(namesOfAnimals[0]))];

        while (existenceOfChar == 0 && chances > 0)
        {
            cout << "Input the letter you want: ";
            cin >> letter;
            for (int i = 0; i < (sizeof(randomWord) / sizeof(randomWord[0])); i++)
            {
                if (randomWord[i] == letter)
                {
                    cout << randomWord[i] << endl;
                    existenceOfChar += 1;
                }
            }

            if (existenceOfChar == 0)
            {
                chances -= 1;
            }
            else
            {
                cout << "Thanks for playing you can start over ";
            }

            if (chances <= 0)
            {
                cout << "Game over. start again";
            }

            if (existenceOfChar == 0)
            {
                cout << "You are remaining with " << chances << " "
                     << "chances" << endl;
            }
        }
        break;
    case 2:
        srand(time(NULL));
        randomWord = namesOfTeams[rand() % (sizeof(namesOfTeams) / sizeof(namesOfTeams[0]))];

        while (existenceOfChar == 0 && chances > 0)
        {
            cout << "Input the letter you want: ";
            cin >> letter;
            for (int i = 0; i < (sizeof(randomWord) / sizeof(randomWord[0])); i++)
            {
                if (randomWord[i] == letter)
                {
                    cout << randomWord[i] << endl;
                    existenceOfChar += 1;
                }
            }

            if (existenceOfChar == 0)
            {
                chances -= 1;
            }

            if (existenceOfChar == 0)
            {
                chances -= 1;
            }
            else
            {
                cout << "Thanks for playing you can start over";
            }

            if (chances <= 0)
            {
                cout << "Game over. start again";
            }

            if (existenceOfChar == 0)
            {
                cout << "You are remaining with " << chances << " "
                     << "chances" << endl;
            }
        }
        break;
    case 3:
        srand(time(NULL));
        randomWord = namesOfDistricts[rand() % (sizeof(namesOfDistricts) / sizeof(namesOfDistricts[0]))];

        while (existenceOfChar == 0 && chances > 0)
        {
            cout << "Input the letter you want: ";
            cin >> letter;
            for (int i = 0; i < (sizeof(randomWord) / sizeof(randomWord[0])); i++)
            {
                if (randomWord[i] == letter)
                {
                    cout << randomWord[i] << endl;
                    existenceOfChar += 1;
                }
            }

            if (existenceOfChar == 0)
            {
                chances -= 1;
            }

            if (existenceOfChar == 0)
            {
                chances -= 1;
            }
            else
            {
                cout << "Thanks for playing you can start over";
            }

            if (chances <= 0)
            {
                cout << "Game over. start again";
            }

            if (existenceOfChar == 0)
            {
                cout << "You are remaining with " << chances << " "
                     << "chances" << endl;
            }
        }
        break;
    case 4:
        srand(time(NULL));
        randomWord = namesOfBooks[rand() % (sizeof(namesOfBooks) / sizeof(namesOfBooks[0]))];

        while (existenceOfChar == 0 && chances > 0)
        {
            cout << "Input the letter you want: ";
            cin >> letter;
            for (int i = 0; i < (sizeof(randomWord) / sizeof(randomWord[0])); i++)
            {
                if (randomWord[i] == letter)
                {
                    cout << randomWord[i] << endl;
                    existenceOfChar += 1;
                }
            }

            if (existenceOfChar == 0)
            {
                chances -= 1;
            }

            if (existenceOfChar == 0)
            {
                chances -= 1;
            }
            else
            {
                cout << "Thanks for playing you can start over";
            }

            if (chances <= 0)
            {
                cout << "Game over. start again";
            }

            if (existenceOfChar == 0)
            {
                cout << "You are remaining with " << chances << " "
                     << "chances" << endl;
            }
        }
        break;
    default:
        srand(time(NULL));
        randomWord = namesOfFilms[rand() % (sizeof(namesOfFilms) / sizeof(namesOfFilms[0]))];

        while (existenceOfChar == 0 && chances > 0)
        {
            cout << "Input the letter you want: ";
            cin >> letter;
            for (int i = 0; i < (sizeof(randomWord) / sizeof(randomWord[0])); i++)
            {
                if (randomWord[i] == letter)
                {
                    cout << randomWord[i] << endl;
                    existenceOfChar += 1;
                }
            }

            if (existenceOfChar == 0)
            {
                chances -= 1;
            }

            if (existenceOfChar == 0)
            {
                chances -= 1;
            }
            else
            {
                cout << "Thanks for playing you can start over";
            }

            if (chances <= 0)
            {
                cout << "Game over. start again";
            }

            if (existenceOfChar == 0)
            {
                cout << "You are remaining with " << chances << " "
                     << "chances" << endl;
            }
        }
    }
}

int main()
{
    guessTheWord();
}
