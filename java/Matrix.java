import java.util.*;
public class Matrix {
    public static void printLetters(String str){
        for(int i = 0; i<str.length(); i++){
            System.out.print(str.charAt(i) + " ");
        }
        System.out.println();

    }
    public static boolean isPalindrome(String str){
        for(int i =0; i < str.length()/2; i++){
            int n = str.length();
            if(str.charAt(i) != str.charAt(n-1-i)) {
           //not a palindrome
            return false;
            }
        }
        return true;
    }
    public static float getShortestPath(String path) {
        int x =0, y =0;
        for(int i = 0; i < path.length(); i++){
            char dir = path.charAt(i);
            if(dir == 'S'){
                y--;
            }
            else if(dir == 'N'){
                y++;
            }
            else if(dir == 'W'){
                x--;
            }
            else{
                x++;
            }
        }

        int X2 = x*x;
        int Y2 = y*y;
        return (float)Math.sqrt(X2 + Y2);
    }
    public static  String substring(String str, int si,int ei){
        String substr = "";
        for(int i =si; i<ei; i++){
            substr += str.charAt(i);
        }
        return substr;
    }
    public static String toUpperCase(String str){
        StringBuilder sb = new StringBuilder("");

        char ch = Character.toUpperCase(str.charAt(0));
        sb.append(ch);

        for(int i = 1; i< str.length(); i++){
            if(str.charAt(i) == ' '&& i < str.length()-1){
                sb.append(str.charAt(i));
                i++;
                sb.append(Character.toUpperCase(str.charAt(i)));
            }else{
               sb.append(str.charAt(i)); 
            }
        }

        return sb.toString();
    } 
    public static String compress(String str) {
        String newstr = "";

        for(int i =0; i < str.length(); i++) {
         Integer count = 1;
         while(i<str.length()-1 && str.charAt(i) == str.charAt(i+1)) {
         count++;
         i++;
         }
         newstr += str.charAt(i);
         if(count > 1){
            newstr += count.toString();
         }
        }
        return newstr;
    } 
    public static void main(String[] args) {
       // char arr[] = {'a','b','c','d'};
        //String str = "abcd";
       // String str2 = new String("xyz");

        //String are IMMUTABLE
       // Scanner sc = new Scanner(System.in);
       // String name;
       // name = sc.nextLine();
       // System.out.println(name);

       String fullName = "Nikhil kumar";
       System.out.println(fullName.length());

       //concatenation
       String firstName = "nikhil";
       String lastName = "kumar";
       String fullNamesString = firstName + " " + lastName;
      // printLetters(fullNamesString);

       //palindrome
       //String str = "Nikhil";
      // System.out.println(    isPalindrome(str));

      //question no.2
      //String path = "NS";
      //System.out.println(getShortestPath(path));
      

      //compare
      String s1 = "Nikhil";
      String s2 = "Nikhil";
      String s3 = new String("Nikhil");

      if(s1 == s2){
        System.out.println("String are equal");
      }else{
        System.out.println("String are not equal");
      }
      
      //if(s1 == s3){
       // System.out.println("String are equal");
     // }else{
      //  System.out.println("String are not equal");
     // }
      if(s1.equals(s3)) {
        System.out.println("String are equal");
      }else{
        System.out.println("String are not equal");
      }


      //substring
     // String str = "HelloWorld";
     // System.out.println( str.substring(0,5));
     // System.out.println(substring(str, 0, 5));

     // Question no.3
     String fruits[] = {"apple","mango","banan"};
     String largest = fruits[0];
     for(int i =1; i < fruits.length; i++) {
     if(largest.compareTo(fruits[i]) < 0) {
        largest = fruits[i];
     }
     }
    
     System.out.println(largest);

     //stringbuilder
     StringBuilder sb = new StringBuilder("");
     for(char ch ='a'; ch <= 'z'; ch++){
        sb.append(ch);
     }//abcdefghijklmnopqstuvwxyz
     //o(26)
     //o(n^2)
     System.out.println(sb.length());

     //Question no.4
     //String str= "hi, i am nikhil";
    // System.out.println(toUpperCase(str));

     String str =  "aaabbcccdd";
     System.out.println(compress(str));
     }
 }
