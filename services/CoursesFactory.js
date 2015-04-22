courseRoster.factory('CoursesFactory', function CoursesFactory(){
    var factory={};
    factory.courses=[];
    factory.addCourse= function(){
        this.courses.push({name: factory.courseName, id: factory.courses.length +1, students:[]});
        factory.courseName=null;
    };
    return factory;
});
