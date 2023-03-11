<!Doctype HTML>
<?php
    $title = 'Filler Title';
    $questions = null;

    if (empty($_REQUEST['pollTitle']) || empty($_REQUEST['questions']))
    {
        $title = $_REQUEST['pollTitle'];
        $questions = $_REQUEST['questions'];
    }
?>
<html lang='en'>
    <head>
        <title>Rankpolls | <?php echo (isset($title)) ? "$title" : "Unknown Poll" ?></title>
    </head>
</html>