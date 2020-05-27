<#import "/spring.ftl" as spring>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TeamOfAreaBoss</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet"
          type="text/css" href="<@spring.url '/css/style.css'/>"/>
</head>

<body>
    <h3>TeamOfAreaBoss list</h3>
    <div>
        <table class="table table-sm table-dark" border="3", bgcolor="f0f8ff">
            <tr>
                <th>ID</th>
                <th>Team members</th>
                <th>Area</th>
                <th>Deleting</th>
                <th>Editing</th>
            </tr>
            <#list teamOfAreaBossList as TeamOfAreaBoss>
                <tr>
                    <td>${TeamOfAreaBoss.idTeam}</td>
                    <td>
                        <#if TeamOfAreaBoss.technicalPersonalList??>
                            <tr>
                                <#list TeamOfAreaBoss.technicalPersonalList as TechnicalPersonal>
                                    <td>${TechnicalPersonal.personalName}</td>
                                </#list>
                            </tr>
                        </#if>
                    </td>
                    <td>
                        <#if TeamOfAreaBoss.area??>
                            ${TeamOfAreaBoss.area.idArea}
                        </#if>
                    </td>
                    <td><a href="delete/${TeamOfAreaBoss.idTeam}"><button>Delete</button></a></td>
                    <td><a href="edit/${TeamOfAreaBoss.idTeam}"><button>Edit</button></a></td>
                </tr>
            </#list>
        </table>
    </div>
</body>
</html>
