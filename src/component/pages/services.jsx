// Filename - pages/Services.js

import React from "react";
import '../cssservice/Services.css';

// Component for the main Services page
export const Services = () => {
  return (
    <div className="services">
      <h1>Course Videos</h1>

      <table>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Course URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Course 1</td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=ua-CiDNNj30&list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1&index=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>Course 2</td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=LHBE6Q9XlzI&list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1&index=3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>Course 3</td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=GPVsHOlRBBI&list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1&index=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </td>
          </tr>
          {/* Additional Videos */}
          <tr>
            <td>Course 4</td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=ZxKM3DCV2kE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>Course 5</td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=cpoXLj24BDY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>Course 6</td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=SOTamWNgDKc&t=14076s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>Course 7</td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=GAy9ChcM4Z0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>Course 8</td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=J6mDkcqU_ZE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


  
  // Component for the first set of Google Technical Interview Questions and Answers
  export const ServicesOne = () => {
	const servicesContainerStyle = {
       margin: 0,
       background: 'radial-gradient(circle, rgba(165,222,193,1) 0%, rgba(172,247,115,1) 0%, rgba(181,174,238,1) 70%)', // Added radial gradient
	  padding: '20px', // Adjust padding as needed
      minHeight: '100vh', // Ensure the container takes at least the full height of the viewport
   
       
	};
  
	return (
	  <div className="services" style={servicesContainerStyle}>
		<h2 style={{ color: "#4285F4", marginBottom: "20px" }}>Google Technical Interview Questions and Answers</h2>

            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                <thead>
                    <tr style={{ background: "#f2f2f2" }}>
                        <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Question</th>
                        <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Question 1 */}
                    <tr>
                        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>1. Explain the difference between `let`, `const`, and `var` in JavaScript.</td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                            <p>
                                - `var` is function-scoped, while `let` and `const` are block-scoped.<br />
                                - `const` is used for variables that should not be reassigned, whereas `let` allows reassignment.<br />
                                - Variables declared with `var` are hoisted, which means they are moved to the top of their scope during compilation.
                            </p>
                        </td>
                    </tr>

                    {/* Question 2 */}
                    <tr>
                        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>2. What is the purpose of the `async` and `await` keywords in JavaScript?</td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                            <p>
                                - `async` is used to define a function that returns a promise.<br />
                                - `await` is used inside an `async` function to pause execution until the promise is resolved, making asynchronous code look and behave like synchronous code.
                            </p>
                        </td>
                    </tr>

                    {/* Question 4 */}
<tr>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>4. What is the difference between REST and GraphQL?</td>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
        <p>
            - REST (Representational State Transfer) is an architectural style that uses standard HTTP methods for communication, while GraphQL is a query language for APIs that allows clients to request only the data they need.<br />
            - RESTful APIs typically have fixed endpoints, while GraphQL allows clients to request specific data structures.
        </p>
    </td>
</tr>

{/* Question 5 */}
<tr>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>5. Describe the event bubbling and event capturing phases in the DOM.</td>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
        <p>
            - Event capturing is the phase where the event travels from the root of the DOM hierarchy down to the target element.<br />
            - Event bubbling is the phase where the event travels from the target element back up to the root of the DOM hierarchy.
        </p>
    </td>
</tr>

{/* Question 6 */}
<tr>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>6. Explain the "box model" in CSS.</td>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
        <p>
            - The box model consists of content, padding, border, and margin.<br />
            - It defines how these components contribute to the total space an element occupies on a web page.
        </p>
    </td>
</tr>

{/* Question 7 */}
<tr>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>7. What is the purpose of the HTTP status code 404?</td>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
        <p>
            - HTTP status code 404 indicates that the server could not find the requested resource.
        </p>
    </td>
</tr>

{/* Question 8 */}
<tr>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>8. Differentiate between sessionStorage and localStorage in JavaScript.</td>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
        <p>
            - Both `sessionStorage` and `localStorage` are web storage options, but `sessionStorage` is cleared when the session ends, while `localStorage` persists even after the session ends.
        </p>
    </td>
</tr>

{/* Question 9 */}
<tr>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>9. How does the "this" keyword work in JavaScript?</td>
    <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
        <p>
            - The value of `this` is determined by how a function is called.<br />
            - In a regular function, `this` refers to the global object (e.g., `window` in a browser).<br />
            - In an arrow function, `this` is lexically scoped, meaning it retains the value of `this` from its enclosing scope.
        </p>
    </td>
</tr>

                    {/* Question 10 */}
                    <tr>
                        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>10. Explain the concept of lazy loading in the context of web development.</td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                            <p>
                                - Lazy loading is a technique where resources (such as images or scripts) are only loaded when they are needed, typically as the user scrolls down a webpage.<br />
                                - This helps improve initial page load performance by deferring the loading of non-essential resources.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// Components for other services
export const ServicesTwo = () => {
    return (
        <div className="services">

<style>
                {`
                    body {
                        
                        background: rgb(2,0,36);
                        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,120,159,0.4834266470259979) 46%, rgba(216,0,255,0.7691409327402836) 67%); 
                    }
                `}
            </style>
           
		   <h2 style={{ color: "#4285F4", marginBottom: "20px" }}>Microsoft Technical Interview Questions and Answers</h2>
		   <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
    <tr style={{ backgroundColor: "#f2f2f2" }}>
        <th style={{ border: "1px solid #dddddd", padding: "8px" }}>Question</th>
        <th style={{ border: "1px solid #dddddd", padding: "8px" }}>Answer</th>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>1. What is the difference between process and thread?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>A process is an independent program that runs in its own memory space, while a thread is a lightweight process that shares the same memory space as its parent process.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>2. Explain the concept of virtual memory in Windows.</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Virtual memory is a memory management technique that provides an "idealized abstraction" of the storage resources that are actually available on a given machine. In Windows, it is implemented using a combination of RAM and disk space.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>3. How does the .NET Framework facilitate language interoperability?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>The .NET Framework Common Language Runtime (CLR) provides a common type system, metadata, and a runtime environment that enables different languages to interoperate seamlessly.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>4. What is the role of the Windows Registry?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>The Windows Registry is a centralized database that stores configuration settings and options for the Windows operating system. It is used to manage system settings, hardware configurations, and application preferences.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>5. Explain the importance of garbage collection in .NET.</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Garbage collection is a process in .NET that automatically reclaims memory occupied by objects that are no longer in use, preventing memory leaks and improving overall system performance.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>6. How does the Model-View-Controller (MVC) pattern work in ASP.NET?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>MVC separates an application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles user input and updates the model). In ASP.NET MVC, this pattern is used for building web applications.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>7. What is the purpose of the IIS (Internet Information Services) server in Windows?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>IIS is a web server that provides a platform for hosting websites, web applications, and services on Windows servers. It handles HTTP requests, manages web applications, and supports various protocols.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>8. Explain the concept of a deadlock in multithreading.</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>A deadlock occurs when two or more threads are blocked indefinitely, each waiting for the other to release a resource. This can result in a situation where no thread can proceed, and the program becomes unresponsive.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>9. What are Azure DevOps Services, and how do they facilitate the DevOps lifecycle?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Azure DevOps Services is a set of development tools and services provided by Microsoft to support the entire DevOps lifecycle, including version control, build automation, release management, and continuous integration.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>10. How does Active Directory contribute to network security in a Windows environment?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Active Directory is a directory service that provides authentication and authorization services in a Windows environment. It centralizes network management and security, enabling administrators to control access, manage policies, and enforce security measures across the network.</td>
    </tr>
</table>


        </div>
    );
};





export const ServicesThree = () => {
    return (
        
        <div className="services" style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(159,127,12,0.4834266470259979) 24%, rgba(20,230,82,0.9568160027682948) 51%, rgba(246,95,95,0.7691409327402836) 71%)",
            margin: 0,
            minHeight: "100vh", 
            padding: "20px", 
            
        }}>
            

        <h2 style={{ color: "#4285F4", marginBottom: "20px" }}>Amazon Technical Interview Questions and Answers</h2>

        

        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>

    <tr style={{ backgroundColor: "#f2f2f2" }}>
        <th style={{ border: "1px solid #dddddd", padding: "8px" }}>Question</th>
        <th style={{ border: "1px solid #dddddd", padding: "8px" }}>Answer</th>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>1. Explain the CAP theorem and its implications for distributed systems.</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>The CAP theorem states that in a distributed system, it is impossible to simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition tolerance. Amazon's DynamoDB, for example, prioritizes availability and partition tolerance over strict consistency.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>2. How does Amazon S3 ensure durability and availability of data?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Amazon S3 achieves durability by storing data redundantly across multiple facilities. It ensures availability by automatically routing requests to the nearest available facility, and it scales horizontally to handle high traffic loads.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>3. Explain the concept of auto-scaling in Amazon EC2 instances.</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Auto-scaling in Amazon EC2 allows for dynamically adjusting the number of running instances based on demand. It helps maintain performance and optimize costs by automatically adding or removing instances as needed.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>4. What is the significance of Amazon DynamoDB Accelerator (DAX)?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Amazon DAX is an in-memory cache for DynamoDB, providing faster response times by caching frequently accessed data. It helps improve read performance for read-intensive applications.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>5. How does Amazon Route 53 contribute to the overall performance of web applications?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Amazon Route 53 is a highly scalable and available domain name system (DNS) web service. It enhances the performance of web applications by providing low-latency DNS queries, load balancing, and domain registration services.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>6. Explain the difference between Amazon RDS and Amazon DynamoDB.</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Amazon RDS is a relational database service, while DynamoDB is a NoSQL database service. RDS supports multiple database engines, while DynamoDB is designed for high-scale, low-latency applications with flexible data models.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>7. What is the purpose of Amazon Elastic Container Service (ECS)?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Amazon ECS is a container orchestration service that simplifies the deployment and management of Docker containers. It allows for easy scaling, monitoring, and automatic load balancing of containerized applications.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>8. How does Amazon CloudFront improve content delivery in web applications?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Amazon CloudFront is a content delivery network (CDN) that distributes content globally, reducing latency by caching static content closer to end-users. It accelerates content delivery and enhances the overall user experience.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>9. Explain the concept of AWS Lambda and its use cases.</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>AWS Lambda is a serverless computing service that allows running code without provisioning or managing servers. It is used for event-driven applications, data processing, and executing code in response to various triggers.</td>
    </tr>
    <tr>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>10. What are the security best practices for applications hosted on AWS?</td>
        <td style={{ border: "1px solid #dddddd", padding: "8px" }}>Security best practices include using IAM roles and policies, enabling VPCs and security groups, encrypting data in transit and at rest, and regularly auditing and monitoring AWS resources for potential security vulnerabilities.</td>
    </tr>
</table>

          


        </div>
    );
};
