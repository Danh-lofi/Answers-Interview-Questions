package Danh;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Stack stck = new Stack();
		System.out.println("Stack có đang rỗng : " + stck.isEmpty());
	    //push elements
	    stck.push(10);
	    stck.push(20);
	    stck.push(30);
	    stck.push(40);
	    //pop two elements from stack
	    stck.pop();
	    stck.pop();
//	    Tìm số 5 trong stack
	    System.out.println("Có phần tử 10");
	    if(stck.find(10)) {
	    	System.out.println("Có");   	
	    }else {
	    	System.out.println("Không");
	    }
	}

}

