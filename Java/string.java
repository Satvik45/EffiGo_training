// import java.util.Scanner;

import java.util.Scanner;

public class string {
    public static void main(String[] args) {
        String string = "india";
        int year = 2024;
        System.out.println(year);
        System.out.println(string);
        System.out.println(year + string);
    
        int wallet =20;
        int people = 4;
        System.out.println("No. of rupees each person will get  -  " + wallet/people);
        System.out.println(wallet/people);

        double sales = 6986.693;
        int number = (int)sales;
        System.out.println(number);

        Scanner scanner = new Scanner(System.in);

        System.out.println(  " What is your name ");
        String name = scanner.nextLine();
        System.out.println(name);

        System.out.println(  " What is your income ");
        double income = scanner.nextDouble();
        System.out.println(income);

        scanner.close();

        String person = "Satvik";
        String food = "Abya";

        System.out.println(person.equals(food));


        double numberD = 3.8;
        int round = (int)numberD;
        System.out.println(round);


        // Scanner scanner = new Scanner(System.in);
        int numberI = scanner.nextInt();
        double modified = (double) numberI;
        System.out.println(modified);


        String string4 = "Satvik";
        String string2 = "Abya";

        System.out.println(!string4.equals(string2));


    }

}
