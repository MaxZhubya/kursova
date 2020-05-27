<#import "/spring.ftl" as spring>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Worker</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet"
          type="text/css" href="<@spring.url '/css/style.css'/>"/>
</head>

<body>
    <h3>Worker list</h3>
    <div>
        <table class="table table-sm table-dark" border="3", bgcolor="f0f8ff">
            <tr>
                <th>ID</th>
                <th>Brigade</th>
                <th>Name</th>
                <th>Type</th>
                <th>Deleting</th>
                <th>Editing</th>
            </tr>
            <#list workerList as Worker>
                <tr>
                    <td>${Worker.idWorker}</td>
                    <td>
                        <#if Worker.brigade??>${Worker.brigade.idBrigade}</#if>
                    </td>
                    <td>${Worker.workerName}</td>
                    <td>${Worker.workerType}</td>
                    <td><a href="delete/${Worker.idWorker}"><button>Delete</button></a></td>
                    <td><a href="edit/${Worker.idWorker}"><button>Edit</button></a></td>
                </tr>
            </#list>
        </table>
    </div>
</body>
</html>
