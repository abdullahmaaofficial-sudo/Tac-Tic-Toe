const boxes = document.querySelectorAll('.boxes')
const result = document.getElementById('result')
const end_page = document.getElementById('end-page-section')
const restart_btn = document.getElementById('restart-button')

boxes.forEach(box => {
    box.onclick = function player_play(){
        if (Game_condition('O') || Game_condition('X')) return true;

        if (box.textContent === "" ){
            box.textContent = 'O'
            if (Game_condition('O')){
                result.textContent = "You Win 🎉"
                show_result()
                return true
            }
        }
        
        if (isDraw()){
            result.textContent = "It's a Draw!";
            show_result()
            return true
        }

        if (system_play()) return true;
    
        
        if (isDraw()){
            result.textContent = "It's a Draw!";
            show_result()
            return true
        }
       
    } 
})

function system_play(){
    if (Game_condition('O')) return true;

    while (true){
        const system_choice = Math.floor(Math.random() * 9)
        console.log(system_choice)
        

            target_box = boxes[system_choice]
        
            if (target_box.textContent === "" ){
                target_box.textContent = 'X'
                            
                if (Game_condition('X')){
                    result.textContent = "You Loose"
                    show_result()
                    return true
    
                }
                break
        }
    }

    return false;
}
    

function isDraw(){
    return [...boxes].every(b => b.textContent !== "")
}


function Game_condition(marker){
    if ((boxes[0].textContent === boxes[1].textContent && 
        boxes[1].textContent === boxes[2].textContent && 
        boxes[0].textContent === marker) || 
        
        (boxes[3].textContent === boxes[4].textContent && 
        boxes[4].textContent === boxes[5].textContent && 
        boxes[3].textContent === marker) || 

        (boxes[6].textContent === boxes[7].textContent && 
        boxes[7].textContent === boxes[8].textContent && 
        boxes[6].textContent === marker)){
        return true
    }

    if ((boxes[0].textContent === boxes[3].textContent && 
        boxes[3].textContent === boxes[6].textContent && 
        boxes[0].textContent === marker) ||
        
        (boxes[1].textContent === boxes[4].textContent && 
        boxes[4].textContent === boxes[7].textContent && 
        boxes[1].textContent === marker) ||
        
        (boxes[2].textContent === boxes[5].textContent && 
        boxes[5].textContent === boxes[8].textContent && 
        boxes[2].textContent === marker)){
        return true
    }
    
    if ((boxes[0].textContent === boxes[4].textContent && 
        boxes[4].textContent === boxes[8].textContent && 
        boxes[0].textContent === marker ) || 

        (boxes[2].textContent === boxes[4].textContent && 
        boxes[4].textContent === boxes[6].textContent && 
        boxes[2].textContent === marker )){
            return true
        }
}

function show_result(){
    end_page.style.display = 'flex';
    restart_btn.onclick = function(){
        end_page.style.display = 'none';
        boxes.forEach(box => box.textContent = "")     
    }
}