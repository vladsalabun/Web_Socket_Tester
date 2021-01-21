function log(message, type = 'white') {

    var html = `
    <tr class="table-` + type + `">
        <td width="160px;">
            <p class="fs-6">` + moment().format('hh:mm:ss DD MMM') + `</p>
        </td>
        <td>` + message + `</td>
    </tr>`;

    $('#log-table').prepend(html);
}