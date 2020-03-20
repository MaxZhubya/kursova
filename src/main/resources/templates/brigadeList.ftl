<#import "/spring.ftl" as spring>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Brigade</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet"
          type="text/css" href="<@spring.url '/css/style.css'/>"/>
</head>

<body>
<h3>Brigade list</h3>
<div>
    <table class="table table-sm table-dark" border="3", bgcolor="f0f8ff">
        <tr>
            <th>ID</th>
            <th>Brigadier</th>
            <th>Workers</th>
            <th>Deleting</th>
            <th>Editing</th>
        </tr>
        <#list brigadeList as Brigade>
            <tr>
                <td>${Brigade.idBrigade}</td>
                <td>${Brigade.brigadier}</td>
                <td>${Brigade.workerList}</td>
                <td><a href="delete/${Brigade.idBrigade}"><button>Delete</button></a></td>
                <td><button>Edit</button></td>
            </tr>
        </#list>
    </table>
</div>
</body>
</html>