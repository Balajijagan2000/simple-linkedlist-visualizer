class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
export default class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {

        const temp = new Node(data);
        if(this.head == null) {
            this.head = temp;
            return;
        }

        temp.next = this.head
        this.head = temp
    }

    insertLast(data) {

        const temp = new Node(data);
        if(this.head == null) {
            this.head = temp;
            return;
        }

        let ptr = this.head
       
        while(ptr.next != null) {
            
            
            ptr = ptr.next
        }
        
        ptr.next = temp
    }

    insertatN(data,pos) {
        if(this.head == null) {
            console.log('List is empty!')
            return
        }

        if(pos == 0) {
            this.insertFirst(data)
            return;
        }
        let ptr = this.head
        const temp = new Node(data)

        for(let index = 0; index < pos-1; index++) {
            if(ptr == null) {
                console.log(`There are only ${index} elements.Please give valid position value.`)
                return;
            }
            ptr = ptr.next  
        }

        if(ptr == null) {
            console.log('Invalid position value!')
        } else {
            temp.next = ptr.next
            ptr.next = temp
        }
    }
    

    deleteFirst() {
        if(this.head == null) {
            console.log('List is empty!')
            return
        }
        this.head = this.head.next
    }

    deleteLast() {
        if(this.head == null) {
            console.log('List is empty!')
            return
        }
        if(this.head.next == null) {
            this.head = null
            return
        }
        let ptr = this.head

        while(ptr.next.next != null) {
            ptr = ptr.next
        }
        ptr.next = null


    }

    deleteatN(pos) {
        if(this.head == null) {
            console.log('List is empty!')
            return
        }

        if(pos == 0) {
            this.deleteFirst()
            return;
        }
        let ptr = this.head
        

        for(let index = 0; index < pos-1; index++) {
            if(ptr == null) {
                console.log(`There are only ${index} elements.Please give valid position value.`)
                return;
            }
            ptr = ptr.next  
        }

        if(ptr == null || ptr.next == null) {
            console.log('Invalid position value!')
        } else {
            ptr.next = ptr.next.next
        }
    }

    reverseHelper(ptr,res) {
        if(ptr.next != null) {
            
            return  res + this.reverseHelper(ptr.next,ptr.data+' -> ')

        }  else {
            return res+ptr.data
        }
        
        
    }
    displayReverse() {

        if(this.head == null) {
            console.log('List is empty!')
            return
        }

        
       const result = this.reverseHelper(this.head,'')
       return result.split(' -> ').reverse().join(' -> ')
    }

    display() {
        
        if(this.head == null) {
            console.log('List is empty!')
            return
        }
        let ptr = this.head
        let res = ''
        while(ptr.next != null) {
            console.log()
            res = res + ptr.data + ' -> '
            ptr = ptr.next
        }
        res = res + ptr.data
        console.log(res)
    }

    getAll() {
        if(this.head == null) {
            console.log('List is empty!')
            return 
        }
        const list = []
        let ptr = this.head
        while(ptr != null) {
            list.push(ptr.data)
            ptr = ptr.next
        }
        return list

    }
}


