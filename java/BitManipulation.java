public class BitManipulation {
    public static void oddOrEven(int n){
        int bitMask =1; 
        if((n & bitMask) == 0){
            System.out.println("even number");
        }else{
            System.out.println("odd number");
        }
    } 
    public static int getIthBit(int n,int i){
        int bitMask = 1<<i;
        if((n & bitMask) == 0) {
            return 0;
        }else {
            return 1;
        }
    }
    public static int setIthBit(int n, int i){
        int bitMask = 1 << i;
        return n | bitMask;
    }
    public static int clearIthBit(int n, int i){
        int bitMask = ~(1 << i);
        return n & bitMask;
    }
    public static int upadateIthBit(int n, int i,int newBit){
      // if(newBit == 0){
      //  return clearIthBit(n, i);
      // }else{
      //  return setIthBit(n, i);
      // }

      n = clearIthBit(n,i);
      int BitMask = newBit<<i;
      return n | BitMask;
    }
    public static int clearIBits(int n,int i){
        int bitMask = (~0)<<i;
    return n  & bitMask;
   }
    public static int clearIBitsinRange(int n, int i,int j){
        int a = ((~0) << (j + 1));
        int b = (1<<i) - 1;
        int bitMask = a|b;
        return n & bitMask;
    }
    public static  boolean isPOwerOfTwo(int n){
        return (n&(n-1)) == 0;
    }
    public static int countSetBits(int n){
        int count = 0;
        while(n > 0) {
            if((n & 1) != 0) {//check our lsb
              count++;
            }
            n = n>>1;
        }
        return count;
    }
    public static int fastExpo(int a, int n) {
        int ans = 1;
        while(n > 0) {
        if((n & 1) != 0) {//check LSB
         ans = ans * a;
        }
        a = a*a;
        n = n>>1;
        }
        return ans;
    }
   public static void main(String[] args) {
    // bit-wise operatorsk
    //System.out.println((5 & 6));
    //System.out.println((5 | 6));
    //System.out.println((5 ^ 6));
    //System.out.println((~5));
    //System.out.println((5 << 2 ));
    //System.out.println((6 >> 1 ));

    //question 1
    oddOrEven(3);
    oddOrEven(11);
    oddOrEven(4);

   System.out.println(getIthBit(8, 3));
   System.out.println(setIthBit(8, 3));
   System.out.println(clearIthBit(8, 3));
   System.out.println(upadateIthBit(10, 2, 1));
   System.out.println(clearIBitsinRange(10, 2, 4));


   //ouestion no. 2
    System.out.println(isPOwerOfTwo(15));
    //ouestion no. 3
    System.out.println(countSetBits(15));
    System.out.println(fastExpo(3, 5));
   } 
}
