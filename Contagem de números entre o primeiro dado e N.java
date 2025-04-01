public class Main {
    public static int countInRange(int[] arr, int N) {
        int first = arr[0];
        int count = 0;
        for (int num : arr) {
            if (num >= first && num <= N) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(countInRange(arr, 4));  
    }
}
