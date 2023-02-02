package Danh;

public class Stack {
	int top;            
    int maxsize = 5;    
    int[] stack_arry = new int[maxsize];  
    Stack(){            
        top = -1;  
    }    
    boolean isEmpty(){          
        return (top < 0);  
    }  
   boolean push (int val){     
        if(top == maxsize-1) {  
            System.out.println("Stack Overflow !!");  
            return false;  
        }  
        else  {  
            top++;  
            stack_arry[top]=val;  
            return true;  
        }  
    }  
   
    boolean pop () {            
        if (top == -1) {  
            System.out.println("Stack Underflow !!");  
            return false;  
        }  
        else   {        
            System.out.println("\nPhần tử lấy ra " + stack_arry[top--]);  
            return true;  
        }  
    }  
    int size() {
    	return stack_arry.length;
    }
    boolean find(int number) {
    	for (int i=0;i< maxsize -1; i++) {
    		if(stack_arry[i] == number) return true;
    	}
    	return false;
    }
}
