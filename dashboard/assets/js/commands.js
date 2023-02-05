$('.categories li').on('click', setCategory); //this is to call the function or to invoke callback

function setCategory(){ // this is to define the function
    blank();
    $('.categories li').removeClass('active');

    const selected = $(this);
    selected.addClass('active');

    //$('.commands li').hide();

    const categoryCommands = $(`.commands .${selected[0].id}`); // we want verify the value in .commands, not .commands li
    categoryCommands.show();

    //jquery
    updateResultText(categoryCommands);
}

function blank() {
    $('.categories li').removeClass('Active');
    $('.commands li').hide();
}

$('#search + button').on('click', ()=>{
    const query = $('#search input').val();
    console.log(query);
    if(!query.trim()) {
        updateResultText(commands);
        return $('.commands li').show();
    }

    const results = new Fuse(commands, {
        isCaseSensitive: false,
        keys: [
            {name: 'name', weight: 1},
            {name: 'category', weight: 0.5}
        ]
    })
    .search(query)
    .map(r=>r.item)

    blank()

    console.log(results);


    for(const command of results)
        $(`#${command.name}Command`).show();

        updateResultText(results);

})

function updateResultText(arr) {

    $('#commandError').text(
        (arr.length <=0)
        ? 'There is nothing to see here.'
        : '');
}

setCategory.bind($('.categories li')[0])() // to make that the first element will be given the class 'active' upon page load
