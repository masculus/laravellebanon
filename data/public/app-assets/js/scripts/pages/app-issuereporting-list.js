$(function() {
    'use strict';

    var dtUserTable = $('.user-list-table'),
        newUserSidebar = $('.new-user-modal'),
        newUserForm = $('.add-new-user')

    var assetPath = '../../../app-assets/';

    if ($('body').attr('data-framework') === 'laravel') {
        assetPath = $('body').attr('data-asset-path');
    }

    // Users List datatable
    if (dtUserTable.length) {
        dtUserTable.DataTable({
            // ajax: assetPath + 'data/user-list.json', // JSON file to add data
            columns: [
                // columns according to JSON
                { data: 'responsive_id' },
                { data: 'name' },
                { data: 'wifehusname' },
                { data: 'father' },
                { data: 'mother' },
                { data: 'housenum' },
                { data: 'age' },
                { data: 'gender' },
                { data: 'sectionname' },
                { data: 'village' },
                { data: 'filename' },
                { data: 'status' },
                { data: 'phone' },
                { data: 'buddyemail' },
                { data: 'buddycontact' }
            ],
            columnDefs: [{
                    // For Responsive
                    // className: 'control',
                    // orderable: false,
                    // responsivePriority: 2,
                    // targets: 0
                },
                {
                    targets: 15,
                    responsivePriority: 4,
                },
                // {
                //     // User full name and username
                //     targets: 0,
                //     responsivePriority: 4,
                //     render: function(data, type, full, meta) {
                //         var $name = full['voter_name'],
                //             // $uname = full['username'],
                //             $image = full['avatar'];
                //         if ($image) {
                //             // For Avatar image
                //             var $output =
                //                 '<img src="' + assetPath + 'images/avatars/' + $image + '" alt="Avatar" height="32" width="32">';
                //         } else {
                //             // For Avatar badge
                //             var stateNum = Math.floor(Math.random() * 6) + 1;
                //             var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
                //             var $state = states[stateNum],
                //                 $name = full['voter_name'],
                //                 $initials = $name.match(/\b\w/g) || [];
                //             $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
                //             $output = '<span class="avatar-content">' + $initials + '</span>';
                //         }
                //         var colorClass = $image === '' ? ' bg-light-' + $state + ' ' : '';
                //         // Creates full output for row
                //         var $row_output =
                //             '<div class="d-flex justify-content-left align-items-center">' +
                //             '<div class="avatar-wrapper">' +
                //             '<div class="avatar ' +
                //             colorClass +
                //             ' mr-1">' +
                //             $output +
                //             '</div>' +
                //             '</div>' +

                //             '</div>';
                //         return $row_output;
                //     }
                // },
                // {
                //     // User Role
                //     targets: 5,
                //     render: function(data, type, full, meta) {
                //         var $role = full['role'];
                //         var roleBadgeObj = {
                //             Subscriber: feather.icons['user'].toSvg({ class: 'font-medium-3 text-primary mr-50' }),
                //             Editor: feather.icons['edit-2'].toSvg({ class: 'font-medium-3 text-info mr-50' }),
                //             Admin: feather.icons['slack'].toSvg({ class: 'font-medium-3 text-danger mr-50' })
                //         };
                //         return "<span class='text-truncate align-middle'>" + roleBadgeObj[$role] + $role + '</span>';
                //     }
                // },
                // {
                //     // User Status
                //     targets: 4,
                //     render: function(data, type, full, meta) {
                //         var $status = full['status'];

                //         return (
                //             '<span class="badge badge-pill ' +
                //             statusObj[$status].class +
                //             '" text-capitalized>' +
                //             statusObj[$status].title +
                //             '</span>'
                //         );
                //     }
                // },
                // {
                //     // Actions
                //     targets: -1,
                //     title: 'Actions',
                //     orderable: false,
                //     render: function(data, type, full, meta) {
                //         return (
                //             '<div class="btn-group">' +
                //             '<a class="btn btn-sm dropdown-toggle hide-arrow" data-toggle="dropdown">' +
                //             feather.icons['more-vertical'].toSvg({ class: 'font-small-4' }) +
                //             '</a>' +
                //             '<div class="dropdown-menu dropdown-menu-right">' +
                //             // '<a href="' +
                //             // userView +
                //             // '" class="dropdown-item">' +
                //             // feather.icons['file-text'].toSvg({ class: 'font-small-4 mr-50' }) +
                //             // 'Details</a>' +
                //             '<a href="javascript:;" class="dropdown-item">' +
                //             feather.icons['archive'].toSvg({ class: 'font-small-4 mr-50' }) +
                //             'Edit</a>' +
                //             '<a href="javascript:;" class="dropdown-item delete-record">' +
                //             feather.icons['trash-2'].toSvg({ class: 'font-small-4 mr-50' }) +
                //             'Delete</a></div>' +
                //             '</div>' +
                //             '</div>'
                //         );
                //     }
                // }
            ],
            order: [
                [2, 'desc']
            ],
            dom: '<"d-flex justify-content-between align-items-center header-actions mx-1 row mt-75"' +
                '<"col-lg-12 col-xl-6" l>' +
                '<"col-lg-12 col-xl-6 pl-xl-75 pl-0"<"dt-action-buttons text-xl-right text-lg-left text-md-right text-left d-flex align-items-center justify-content-lg-end align-items-center flex-sm-nowrap flex-wrap mr-1"<"mr-1"f>B>>' +
                '>t' +
                '<"d-flex justify-content-between mx-2 row mb-1"' +
                '<"col-sm-12 col-md-6"i>' +
                '<"col-sm-12 col-md-6"p>' +
                '>',
            language: {
                sLengthMenu: 'Show _MENU_',
                search: 'Search',
                searchPlaceholder: 'Search..'
            },
            // Buttons with Dropdown
            buttons: [{
                // text: 'Add New Voter',
                // className: 'add-new btn btn-primary mt-50',
                attr: {
                    'data-toggle': 'modal',
                    'data-target': '#modals-slide-in'
                },
                init: function(api, node, config) {
                    $(node).removeClass('btn-secondary');
                }
            }],
            // For responsive popup
            responsive: {
                details: {
                    display: $.fn.dataTable.Responsive.display.modal({
                        header: function(row) {
                            var data = row.data();
                            return 'Details of ' + data['name'];
                        }
                    }),
                    type: 'column',
                    renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                        tableClass: 'table',
                        columnDefs: [{
                                targets: 1,
                                visible: false
                            },
                            {
                                targets: 2,
                                visible: false
                            },
                            {
                                targets: 3,
                                visible: false
                            },
                            {
                                targets: 4,
                                visible: false
                            },
                            {
                                targets: 5,
                                visible: false
                            },
                            {
                                targets: 6,
                                visible: false
                            },
                            {
                                targets: 7,
                                visible: false
                            },
                            {
                                targets: 8,
                                visible: false
                            },
                            {
                                targets: 9,
                                visible: false
                            },
                            {
                                targets: 10,
                                visible: false
                            },
                            {
                                targets: 11,
                                visible: false
                            },
                            {
                                targets: 12,
                                visible: false
                            },
                            {
                                targets: 13,
                                visible: false
                            },
                            {
                                targets: 14,
                                visible: false
                            },
                            {
                                targets: 15,
                                visible: false
                            }
                        ]
                    })
                }
            },
            language: {
                paginate: {
                    // remove previous & next text from pagination
                    previous: '&nbsp;',
                    next: '&nbsp;'
                }
            },
            initComplete: function() {
                this.api()
                    .columns(1)
                    .every(function() {
                        var column = this;
                        var select = $(
                                '<input id="UserPlan" type="search" placeholder="Name" class="form-control text-capitalize mb-md-0 mb-2">'
                            )
                            .appendTo('.user_plan')
                            .on('change keyup', function() {
                                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                                column.search(val ? '^' + val + '$' : '', true, false).draw();
                            });

                        column
                            .data()
                            .unique()
                            .sort()
                            .each(function(d, j) {
                                select.append('<option value="' + d + '" class="text-capitalize">' + d + '</option>');
                            });
                    });

                // Adding role filter once table initialized
                this.api()
                    .columns(9)
                    .every(function() {
                        var column = this;
                        var select = $(
                                '<select id="UserRole" class="form-control text-capitalize mb-md-0 mb-2"><option value=""> Select village </option></select>'
                            )
                            .appendTo('.user_role')
                            .on('change', function() {
                                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                                column.search(val ? '^' + val + '$' : '', true, false).draw();
                            });

                        column
                            .data()
                            .unique()
                            .sort()
                            .each(function(d, j) {
                                select.append('<option value="' + d + '" class="text-capitalize">' + d + '</option>');
                            });
                    });

                this.api()
                    .columns(14)
                    .every(function() {
                        var column = this;
                        var select = $(
                                '<input id="UserStatus" type="search" placeholder="Contact" class="form-control text-capitalize mb-md-0 mb-2">'
                            )
                            .appendTo('.user_status')
                            .on('change keyup', function() {
                                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                                column.search(val ? '^' + val + '$' : '', true, false).draw();
                            });

                        column
                            .data()
                            .unique()
                            .sort()
                            .each(function(d, j) {
                                select.append('<option value="' + d + '" class="text-capitalize">' + d + '</option>');
                            });
                    });

            }
        });
    }

    // Check Validity
    function checkValidity(el) {
        if (el.validate().checkForm()) {
            submitBtn.attr('disabled', false);
        } else {
            submitBtn.attr('disabled', true);
        }
    }


    // Form Validation
    // if (newUserForm.length) {
    //     newUserForm.validate({
    //         errorClass: 'error',
    //         rules: {
    //             'voter_name': {
    //                 required: true
    //             },
    //             'wifehusname': {
    //                 required: true
    //             },
    //             'father': {
    //                 required: true
    //             },
    //             'mother': {
    //                 required: true
    //             },
    //             'housenum': {
    //                 required: true
    //             },
    //             'age': {
    //                 required: true
    //             },
    //             'gender': {
    //                 required: true
    //             },
    //             'sectionname': {
    //                 required: true
    //             },
    //             'village': {
    //                 required: true
    //             },
    //             'filename': {
    //                 required: true
    //             },
    //             'status': {
    //                 required: true
    //             },
    //             'phone': {
    //                 required: true
    //             },
    //             'buddyemail': {
    //                 required: true
    //             },
    //             'buddycontact': {
    //                 required: true
    //             }

    //         }
    //     });

    //     newUserForm.on('submit', function(e) {
    //         var isValid = newUserForm.valid();
    //         e.preventDefault();
    //         if (isValid) {
    //             $.ajax({
    //                 type: 'post',
    //                 url: 'voter',
    //                 data: $('form').serialize(),
    //                 success: function() {
    //                     location.reload();
    //                 }
    //             });
    //             newUserSidebar.modal('hide');
    //         }
    //     });
    // }
    // To initialize tooltip with body container
    $('body').tooltip({
        selector: '[data-toggle="tooltip"]',
        container: 'body'
    });
});